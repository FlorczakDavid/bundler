<script>
export default {
    props: {
        mapsUrl: String
    }
}
</script>


<template>
    <iframe
        title="mapView"
        width="900"
        height="500"
        style="border:0"
        referrerpolicy="no-referrer-when-downgrade"
        :src=this.mapsUrl
        allowfullscreen>
    </iframe>
</template>