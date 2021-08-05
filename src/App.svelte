<script lang="ts">
  import { onMount } from "svelte";
  import * as THREE from "three";

  let canvas: HTMLCanvasElement;

  onMount(() => {
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });
    
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.setZ(30);
    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({
      color: 0xff6347,
      wireframe: true,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    const animate = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.render(scene, camera);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.005;
      torus.rotation.z += 0.01;
      requestAnimationFrame(animate);
    };
    animate();
    return () => {};
  });
</script>

<canvas bind:this={canvas} />

<style>
  :global(body) {
    margin: 0;
    /* font-family: Arial, Helvetica, sans-serif; */
  }
</style>
