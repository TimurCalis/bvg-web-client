<script>
  import { fetchData } from "../functions.js";
  import DeparturesTable from "../components/DeparturesTable.svelte";

  let possibleStations = [];
  let allDepartures = [];
  let stationInput = "";

  $: {
    possibleStations = fetchData(
      `/locations?poi=false&addresses=false&query=${stationInput}`
    );
  }

  async function getStationbyId(stationId) {
    const result = await fetchData(`/stops/${stationId}/departures?results=5`);
    allDepartures = result.departures;
  }
</script>

<h4>Station Input: {stationInput}</h4>
{#await possibleStations}
  <p>...waiting</p>
{:then possibleStations}
  {#each possibleStations as station}
    <button on:click={getStationbyId(station.id)}
      >station is: {station.name}</button
    >
  {/each}
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<input bind:value={stationInput} />

<DeparturesTable {allDepartures} />
