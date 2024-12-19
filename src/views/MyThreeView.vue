<template>
    <div ref="cubeContainer" class="cube-container"></div>
</template>

<script>
    import * as THREE from 'three';

    export default {   
        name: 'RotatingCube',
        mounted() {
            this.initThree();
            this.animate();
        },
        beforeUnmount() {
            window.removeEventListener('resize', this.onWindowResize);
            cancelAnimationFrame(this.animationId);
            this.renderer.dispose();
        },
        methods: {
            initThree() {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(
                    75,
                    this.$refs.cubeContainer.offsetWidth / this.$refs.cubeContainer.offsetHeight,
                    0.1,
                    1000
                );

                this.renderer = new THREE.WebGLRenderer({ antialias: true });
                this.renderer.setSize(
                    this.$refs.cubeContainer.offsetWidth,
                    this.$refs.cubeContainer.offsetHeight
                );
                this.$refs.cubeContainer.appendChild(this.renderer.domElement);
        
                const geometry = new THREE.BoxGeometry();
        
                const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        
                const edgesGeometry = new THREE.EdgesGeometry(geometry);
                const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
                this.edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
        
                this.cube = new THREE.Mesh(geometry, material);
                this.scene.add(this.cube);
                this.scene.add(this.edges);
        
                this.camera.position.z = 5;
        
                this.renderer.render(this.scene, this.camera);
        
                window.addEventListener('resize', this.onWindowResize);
            },
            animate() {
                this.animationId = requestAnimationFrame(this.animate);
                        
                this.cube.rotation.x += 0.01;
                this.cube.rotation.y += 0.01;
        
                this.edges.rotation.x = this.cube.rotation.x;
                this.edges.rotation.y = this.cube.rotation.y;

                this.renderer.render(this.scene, this.camera);
            },
            onWindowResize() {
                const container = this.$refs.cubeContainer;
                this.camera.aspect = container.offsetWidth / container.offsetHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(container.offsetWidth, container.offsetHeight);
            },
        },
    };
</script>

<style>
    .cube-container {
        width: 100vw;
        height: 100vh;
        position: relative;
        overflow: hidden;
    }
</style>