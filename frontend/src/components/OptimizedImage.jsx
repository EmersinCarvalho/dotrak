import { useState, useEffect, useRef } from 'react';

export function OptimizedImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  priority = false 
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;

    // Se for priority, carregar imediatamente
    if (priority) {
      const img = imgRef.current;
      if (img.complete) {
        setLoaded(true);
      }
    }
  }, [priority]);

  const handleLoad = () => {
    setLoaded(true);
  };

  const handleError = () => {
    setError(true);
    console.error(`Erro ao carregar imagem: ${src}`);
  };

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading}
      decoding="async"
      className={`${className} ${loaded ? 'loaded' : 'loading'} ${error ? 'error' : ''}`}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    />
  );
}
