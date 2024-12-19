import*as e from"three";import{openBlock as t,createElementBlock as i}from"vue";var n={name:"RotatingCube",mounted(){this.initThree(),this.animate()},beforeUnmount(){window.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.animationId),this.renderer.dispose()},methods:{initThree(){this.scene=new e.Scene,this.camera=new e.PerspectiveCamera(75,this.$refs.cubeContainer.offsetWidth/this.$refs.cubeContainer.offsetHeight,.1,1e3),this.renderer=new e.WebGLRenderer({antialias:!0}),this.renderer.setSize(this.$refs.cubeContainer.offsetWidth,this.$refs.cubeContainer.offsetHeight),this.$refs.cubeContainer.appendChild(this.renderer.domElement);const t=new e.BoxGeometry,i=new e.MeshBasicMaterial({color:65280}),n=new e.EdgesGeometry(t),s=new e.LineBasicMaterial({color:0});this.edges=new e.LineSegments(n,s),this.cube=new e.Mesh(t,i),this.scene.add(this.cube),this.scene.add(this.edges),this.camera.position.z=5,this.renderer.render(this.scene,this.camera),window.addEventListener("resize",this.onWindowResize)},animate(){this.animationId=requestAnimationFrame(this.animate),this.cube.rotation.x+=.01,this.cube.rotation.y+=.01,this.edges.rotation.x=this.cube.rotation.x,this.edges.rotation.y=this.cube.rotation.y,this.renderer.render(this.scene,this.camera)},onWindowResize(){const e=this.$refs.cubeContainer;this.camera.aspect=e.offsetWidth/e.offsetHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(e.offsetWidth,e.offsetHeight)}}};const s={ref:"cubeContainer",class:"cube-container"};!function(e,t){void 0===t&&(t={});var i=t.insertAt;if("undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("\n.cube-container {\n        width: 100vw;\n        height: 100vh;\n        position: relative;\n        overflow: hidden;\n}\n"),n.render=function(e,n,r,o,a,h){return t(),i("div",s,null,512)},n.__file="src/views/MyThreeView.vue";export{n as default};
