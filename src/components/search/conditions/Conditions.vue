<template>
  <div class="conditions">
    <PriceSelector id="price-selector" />
    <br>
    <WalkingDistanceSelector id="walking-distance-selector" />
    <br>
    <FloorPlanSelector id="floor-plan-selector" />
    <br>
    <OccupiedAreaSelector id="occupied-area-selector" />
    <br>
    <BuiltYearMonthSelector id="built-year-month-selector" />
    <br>
    <FreeWordSelector id="free-word-selector" />
  </div>
</template>

<script>
import PriceSelector from './PriceSelector'
import WalkingDistanceSelector from './WalkingDistanceSelector'
import FloorPlanSelector from './FloorPlanSelector'
import OccupiedAreaSelector from './OccupiedAreaSelector'
import BuiltYearMonthSelector from './BuiltYearMonthSelector'
import FreeWordSelector from './FreeWordSelector'
export default {
  name: 'Conditions',
  components: {
    PriceSelector,
    WalkingDistanceSelector,
    FloorPlanSelector,
    OccupiedAreaSelector,
    BuiltYearMonthSelector,
    FreeWordSelector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
