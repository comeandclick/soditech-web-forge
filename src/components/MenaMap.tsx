import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MenaMapProps {
  className?: string;
  showDubaiOffice?: boolean;
}

const MenaMap: React.FC<MenaMapProps> = ({ className = "", showDubaiOffice = false }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // For demo purposes, we'll use a basic visualization
    // In production, you would set: mapboxgl.accessToken = 'your-mapbox-token';
    
    // Create a simple map visualization without Mapbox for demo
    const mapDiv = mapContainer.current;
    mapDiv.innerHTML = `
      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 rounded-lg relative overflow-hidden">
        <div class="absolute inset-4 bg-white/20 rounded-lg backdrop-blur-sm">
          <div class="p-4 h-full flex flex-col justify-center items-center">
            <div class="text-center">
              <h3 class="font-bold text-lg mb-2">${showDubaiOffice ? 'Our Dubai Office' : 'MENA Region Coverage'}</h3>
              <div class="grid grid-cols-3 gap-2 text-xs">
                ${showDubaiOffice ? 
                  `<div class="col-span-3 bg-blue-500 text-white p-2 rounded pulse">
                    📍 Dubai, UAE
                  </div>` :
                  `<div class="bg-blue-400/80 text-white p-1 rounded">UAE</div>
                   <div class="bg-blue-400/80 text-white p-1 rounded">Saudi</div>
                   <div class="bg-blue-400/80 text-white p-1 rounded">Qatar</div>
                   <div class="bg-blue-400/80 text-white p-1 rounded">Kuwait</div>
                   <div class="bg-blue-400/80 text-white p-1 rounded">Oman</div>
                   <div class="bg-blue-400/80 text-white p-1 rounded">Bahrain</div>
                   <div class="bg-green-400/80 text-white p-1 rounded">Egypt</div>
                   <div class="bg-green-400/80 text-white p-1 rounded">Morocco</div>
                   <div class="bg-green-400/80 text-white p-1 rounded">Algeria</div>`
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
      }
    };
  }, [showDubaiOffice]);

  return (
    <div className={`${className}`}>
      <div ref={mapContainer} className="w-full h-full min-h-[200px] rounded-lg shadow-lg" />
    </div>
  );
};

export default MenaMap;