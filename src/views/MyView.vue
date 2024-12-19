<script>
import AdressSearcher from '../components/adressSearcher.vue';
import EmbedMaps from '../components/embedMaps.vue';
import { generateMapUrl } from '../utils/map';

export default {
    components: {
        AdressSearcher,
        EmbedMaps,
    },
    data() {
        return {
            coordinates: { x: '1.909035', y: '47.899102' },
            mapsUrl: '',
        };
    },
    methods: {
        updateCoordinates(newCoordinates) {
            this.coordinates = newCoordinates;
            this.updateMapView();
        },
        updateMapView() {
            this.mapsUrl = generateMapUrl(this.coordinates);
        },
        //UNUSED
        unusedFunctionMV() {
            return 'Hello itp4!'
        }
    },
    mounted() {
        this.updateMapView();
    },
};
</script>

<template>
    <div>
        <AdressSearcher @updatedCoordinates="updateCoordinates" />
        <EmbedMaps :mapsUrl="mapsUrl" />
    </div>
</template>
