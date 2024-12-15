<script>
import { fetchAddressSuggestions } from '../utils/api';

export default {
    data() {
        return {
            input: '',
            inputSuggestion: [],
            addressDetails: '',
            coordinates: {
                x: '1.909035',
                y: '47.899102'
            },
            mapsUrl: ''
        }
    }, 
    methods: {
        async fetchAdress() {
            try {
                this.addressDetails = await fetchAddressSuggestions(this.input)
            } catch (error) {
                console.error('Error with fetchAddressSuggestions:', error);
                throw error;
            }
        },
        selectLocation() {
            let chosenLocation = this.addressDetails.find(
                (addressDetail) => addressDetail.properties.label === this.input
            );
            if(chosenLocation) {
                const coordinates = {
                    x: chosenLocation.geometry.coordinates[0].toString(), 
                    y: chosenLocation.geometry.coordinates[1].toString()
                };
                this.$emit('updatedCoordinates', coordinates);
            }
        }
    }
}
</script>


<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="d-flex" role="search">
                        <input v-model="input" 
                            v-on:input="fetchAdress" 
                            list="datalistStack" 
                            class="form-control me-2" 
                            type="search" 
                            placeholder="Search" 
                            aria-label="Search">
                        <button v-on:click="selectLocation" class="btn btn-outline-success" type="button">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        <datalist id="datalistStack">
            <option v-for="(addressDetails1, index) in addressDetails" 
                :key="index" 
                :value="addressDetails1.properties.label">
            </option>
        </datalist>
    </div>
</template>