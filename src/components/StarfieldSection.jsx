import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ChangingCuboids from './ChangingCuboids';

function StarfieldSection({ containerRef , nextContainer}) {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create star texture
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext('2d');
    context.beginPath();
    context.arc(64, 64, 60, 0, Math.PI * 2);
    context.fillStyle = 'white';
    context.fill();
    const texture = new THREE.CanvasTexture(canvas);

    // Create stars with trails
    const trailLength = 16; // Number of trail dots behind each star
    const starCount = 500;
    const totalPoints = starCount * trailLength;
    
    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1,
      map: texture,
      transparent: true,
      opacity: 0.8,
    });

    // Create positions and opacity arrays
    const positions = new Float32Array(totalPoints * 3);
    const opacities = new Float32Array(totalPoints);
    const trailPositions = [];

    // Initialize star positions and trails
    for (let i = 0; i < starCount; i++) {
      const baseIndex = i * trailLength;
      const x = (Math.random() - 0.5) * 1000;
      const y = (Math.random() - 0.5) * 1000;
      const z = Math.random() * 1000 - 500;

      // Store initial positions for trail calculation
      trailPositions[i] = {
        x,
        y,
        z,
        velocity: 5,
        history: Array(trailLength).fill({ x, y, z })
      };

      // Set positions and decreasing opacity for trail
      for (let j = 0; j < trailLength; j++) {
        const pointIndex = baseIndex + j;
        positions[pointIndex * 3] = x;
        positions[pointIndex * 3 + 1] = y;
        positions[pointIndex * 3 + 2] = z - (j * 0.000000001); // Space out trail points
        opacities[pointIndex] = 1 - (j / trailLength); // Fade out trail
      }
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));


    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animate stars and trails
    const animate = () => {
      requestAnimationFrame(animate);
      const positions = starGeometry.attributes.position.array;

      for (let i = 0; i < starCount; i++) {
        const baseIndex = i * trailLength;
        let star = trailPositions[i];
        
        // Update main star position
        star.z += star.velocity;
        if (star.z > 0) {
          star.z = -500;
          star.x = (Math.random() - 0.5) * 1000;
          star.y = (Math.random() - 0.5) * 1000;
        }

        // Update trail history
        star.history.pop();
        star.history.unshift({ x: star.x, y: star.y, z: star.z });

        // Update positions for star and trail
        for (let j = 0; j < trailLength; j++) {
          const pointIndex = baseIndex + j;
          const historyPoint = star.history[j];
          
          positions[pointIndex * 3] = historyPoint.x;
          positions[pointIndex * 3 + 1] = historyPoint.y;
          positions[pointIndex * 3 + 2] = historyPoint.z ;
        }
      }

      starGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="opacity-0 sticky top-0 left-0 aspect-video min-w-full max-w-screen "
    >
      <div ref={mountRef} />
      {/* Made the cuboids animation here */}
      <ChangingCuboids currentContainer={containerRef} nextContainer={nextContainer} />
    </div>
  );
}

export default StarfieldSection;