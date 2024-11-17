import { openBlock, createElementBlock, Fragment, createElementVNode, withDirectives, vModelText, renderList } from 'vue';

async function fetchAddressSuggestions(query, limit = 5) {
    try {
        const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${query}&limit=${limit}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.features
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

//MAPS EMBED URL
const MAPS_EMBED_URL = "https://www.google.com/maps/embed/v1/view";
const API_KEY = "AIzaSyDQU-TgI_IbQOtsXCq8ydVT98FChLwXrpg";
const KEY_PROMPT = "?key=";
const CENTER_PROMPT = "&center=";
const ZOOM_PROMPT = "&zoom=";

function generateMapUrl(coordinates, zoom = 18) {
    return `${MAPS_EMBED_URL}${KEY_PROMPT}${API_KEY}` +
        `${CENTER_PROMPT}${coordinates.y},${coordinates.x}`+
        `${ZOOM_PROMPT}${zoom}`;
}

var script = {
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
                this.addressDetails = await fetchAddressSuggestions(this.input);
            } catch (error) {
                console.error('Error with fetchAddressSuggestions:', error);
                throw error;
            }
        },
        setMapsLocation() {
            let chosenLocation = this.addressDetails.filter((addressDetail) => addressDetail.properties.label === this.input)[0];
            let coordinates = chosenLocation.geometry.coordinates;
            this.coordinates = {x: coordinates[0].toString(), y: coordinates[1].toString()};
            this.updateMapView();
        }, 
        updateMapView() {
            this.mapsUrl = generateMapUrl(this.coordinates);
            console.log(this.mapsUrl);
        }
    },
    mounted() {
        this.updateMapView();
    }
};

const _hoisted_1 = { class: "navbar navbar-expand-lg bg-body-tertiary" };
const _hoisted_2 = { class: "container-fluid" };
const _hoisted_3 = {
  class: "collapse navbar-collapse",
  id: "navbarSupportedContent"
};
const _hoisted_4 = {
  class: "d-flex",
  role: "search"
};
const _hoisted_5 = { id: "datalistStack" };
const _hoisted_6 = ["value"];
const _hoisted_7 = ["src"];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("nav", _hoisted_1, [
      createElementVNode("div", _hoisted_2, [
        _cache[3] || (_cache[3] = createElementVNode("a", {
          class: "navbar-brand",
          href: "#"
        }, "Navbar", -1 /* HOISTED */)),
        _cache[4] || (_cache[4] = createElementVNode("button", {
          class: "navbar-toggler",
          type: "button",
          "data-bs-toggle": "collapse",
          "data-bs-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }, [
          createElementVNode("span", { class: "navbar-toggler-icon" })
        ], -1 /* HOISTED */)),
        createElementVNode("div", _hoisted_3, [
          createElementVNode("form", _hoisted_4, [
            withDirectives(createElementVNode("input", {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($data.input) = $event)),
              onInput: _cache[1] || (_cache[1] = (...args) => ($options.fetchAdress && $options.fetchAdress(...args))),
              list: "datalistStack",
              class: "form-control me-2",
              type: "search",
              placeholder: "Search",
              "aria-label": "Search"
            }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
              [vModelText, $data.input]
            ]),
            createElementVNode("button", {
              onClick: _cache[2] || (_cache[2] = (...args) => ($options.setMapsLocation && $options.setMapsLocation(...args))),
              class: "btn btn-outline-success",
              type: "button"
            }, "Search")
          ])
        ])
      ])
    ]),
    createElementVNode("datalist", _hoisted_5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.addressDetails, (addressDetails1, index) => {
        return (openBlock(), createElementBlock("option", {
          key: index,
          value: addressDetails1.properties.label
        }, null, 8 /* PROPS */, _hoisted_6))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    createElementVNode("iframe", {
      title: "mapView",
      width: "900",
      height: "500",
      style: {"border":"0"},
      referrerpolicy: "no-referrer-when-downgrade",
      src: this.mapsUrl,
      allowfullscreen: ""
    }, null, 8 /* PROPS */, _hoisted_7)
  ], 64 /* STABLE_FRAGMENT */))
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "\nhtml, body {\n    font-size: size 1.2em;\n    background: #fafafa;\n}\n";
styleInject(css_248z);

script.render = render;
script.__file = "src/components/MyView.vue";

export { script as default };
