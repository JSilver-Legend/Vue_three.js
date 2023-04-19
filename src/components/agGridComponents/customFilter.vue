<template>
    <div>
        <div style="display:block; text-align: left; border: solid 1px lightgray; border-radius: 3px; position: relative; margin: 10px;">
            <!-- <div style="padding: 10px; background-color: #d3d3d3; text-align: center;">This is a very wide filter</div> -->
            <label style="margin: 10px; display:block;">
                <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()"  id="cbNoFilter" value="All" />
                <span style="margin-left: 10px; display:inline-block;">No Filter</span>
            </label>
            <label style="margin: 10px; display:block;">
                <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbPositive" value="cbpositive" />
                <span style="margin-left: 10px; display:inline-block;">Positive</span>
            </label>
            <label style="margin: 10px; display:block;">
                <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbNegative" value="cbnegative" />
                <span style="margin-left: 10px; display:inline-block;">Negative</span>
            </label>
            <label style="margin: 10px; display:block;">
              <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbGreaterRange1" value="range1" />
              <span style="margin-left: 10px; display:inline-block;">100-200mm</span>
            </label>
            <label style="margin: 10px; display:block;">
              <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbGreaterRange2" value="range2" />
              <span style="margin-left: 10px; display:inline-block;">200-300mm</span>
            </label>
            <label style="margin: 10px; display:block;">
                <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbGreater50" value="100" />
                <span style="margin-left: 10px; display:inline-block;"> &gt; 100</span>
            </label>
            <label style="margin: 10px; display:block;">
                <input type="radio" name="clamplength" v-model="clamplength" v-on:change="updateFilter()" id="cbGreater90" value="500" />
                <span style="margin-left: 10px; display:inline-block;"> &gt; 500</span>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    setup() {
        return {
            clamplength: 'All',
            filterText: null,
         }
    },
    methods: {
        updateFilter() {
            this.params.filterChangedCallback();
        },

        doesFilterPass(params) {
            if (this.clamplength === '500')
                return params.data.clampLength >= 500;
            else if (this.clamplength === '100')
                return params.data.clampLength >= 100;
            else if (this.clamplength === 'range1')
              return params.data.clampLength >= 100 && params.data.clampLength <= 200;
            else if (this.clamplength === 'range2')
              return params.data.clampLength >= 200 && params.data.clampLength <= 300;
            else if (this.clamplength === 'cbnegative')
                return params.data.clampLength < 0;
            else if (this.clamplength === 'cbpositive')
                return params.data.clampLength >= 0;
            else
                return true
        },

        isFilterActive() {
            return this.clamplength === '500' || this.clamplength === '100' || this.clamplength === 'range1' || this.clamplength === 'range2' || this.clamplength === 'cbnegative' || this.clamplength === 'cbpositive';
        },


        // this example isn't using getModel() and setModel(),
        // so safe to just leave these empty. don't do this in your code!!!
        getModel() { },

        setModel() { },

    },
}
</script>>
