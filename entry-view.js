import e from"./entry-adress-searcher.js";import{openBlock as r,createElementBlock as t,resolveComponent as s,createVNode as o}from"vue";var a={props:{mapsUrl:String}};const n=["src"];a.render=function(e,s,o,a,d,i){return r(),t("iframe",{title:"mapView",width:"900",height:"500",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade",src:this.mapsUrl,allowfullscreen:""},null,8,n)},a.__file="src/components/embedMaps.vue";var d={components:{AdressSearcher:e,EmbedMaps:a},data:()=>({coordinates:{x:"1.909035",y:"47.899102"},mapsUrl:""}),methods:{updateCoordinates(e){this.coordinates=e,this.updateMapView()},updateMapView(){this.mapsUrl=function(e,r=18){return`https://www.google.com/maps/embed/v1/view?key=AIzaSyDQU-TgI_IbQOtsXCq8ydVT98FChLwXrpg&center=${e.y},${e.x}&zoom=${r}`}(this.coordinates)},unusedFunctionMV:()=>"Hello itp4!"},mounted(){this.updateMapView()}};d.render=function(e,a,n,d,i,p){const l=s("AdressSearcher"),m=s("EmbedMaps");return r(),t("div",null,[o(l,{onUpdatedCoordinates:p.updateCoordinates},null,8,["onUpdatedCoordinates"]),o(m,{mapsUrl:i.mapsUrl},null,8,["mapsUrl"])])},d.__file="src/views/MyView.vue";export{d as default};
