import { useEffect, useRef } from 'react';

export const ScrollAnimationBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 240;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) return;

    const images: HTMLImageElement[] = [];

    const currentFrame = (index: number) => (
      `/frames/frame_${index.toString().padStart(6, '0')}.jpg`
    );

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        images.push(img);
        
        img.onload = () => {
          if (i === 1) {
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0);
          }
        };
      }
    };

    let lastFrameIndex = 0;
    let ticking = false;

    const updateImage = (index: number) => {
      if (images[index] && images[index].complete) {
        if (canvas.width !== images[index].width && images[index].width > 0) {
          canvas.width = images[index].width;
          canvas.height = images[index].height;
        }
        context.drawImage(images[index], 0, 0);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = document.documentElement.scrollTop;
          const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
          const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
          
          const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
          );
          
          if (frameIndex !== lastFrameIndex) {
            updateImage(frameIndex);
            lastFrameIndex = frameIndex;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = () => {
      updateImage(lastFrameIndex);
    };

    preloadImages();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover" 
        style={{
          imageRendering: 'crisp-edges',
          transform: 'translateZ(0)',
        }}
      />
      {/* Add a gradient overlay to make text more readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-transparent to-[#0F172A]/80" />
    </div>
  );
};
