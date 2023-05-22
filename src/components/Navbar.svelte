<!-- Once again, thanks ChatGPT -->

<script lang="ts">
  export let items: { imgPath?: string; displayName?: string; url: string; requiresLogin?: boolean }[] = [];

  const isLoggedIn = true;
</script>

<nav>
  <ul>
    {#each items as item}
      <li title={item.displayName}>
        {#if item.imgPath}
          <a href={`${item.url}`}><img src={item.imgPath} height="38"/></a>
        {:else if item.displayName}
          <a href={`${item.url}`}>{item.displayName}</a>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: #000 0 0 10px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
  }

  li {
    margin-left: 10px;
    font-size: 2em;
    padding-left: 1em;
    padding-right: 1em;
    cursor: pointer;
  }

  a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s all;
  }

  a:hover {
    color: #ffa78d;
    text-decoration: none;
  }
</style>