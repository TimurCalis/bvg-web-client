<script>
  export let allDepartures;
  import { formatTime } from "../functions.js";
</script>

<table>
  <tr>
    <th>Abfahrtszeit</th>
    <th class="line">Linie </th>
    <th>Richtung</th>
  </tr>
  {#each allDepartures as departure}
    <tr>
      <td>{formatTime(departure.when)} </td>
      <td class="line">{departure.line.name}</td>
      <td>{departure.direction}</td>
    </tr>
  {/each}
</table>

<style>
  th {
    color: brown;
  }
  th,
  td {
    margin: 10px;
    border-collapse: collapse;
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    border: 1px solid black;
  }

  .line {
    width: 100px;
  }
</style>
