<script lang="ts">
    import ProjectsList from "../components/ProjectsList.svelte";
</script>

<title>Freehost - Free web hosting for all</title>

<style>
/* RS2 styles */
main {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    text-align: center;
    height: 80vh;
    margin: 0;
}

p {
    font-size: 24px;
    line-height: 1.5;
}



/* Login component styles */
/* (You can add additional styling specific to the Login component here) */
</style>

<main animate-fade-in>
    <div>
        <h1>Freehost</h1>
        <p>Free web hosting for all.</p>
        <p>It's really that simple.</p>
        <p><a href="/auth">Create an account or login</a> to get started on your dreams.</p>
        <a href="/tech">Learn how I built this</a>
        <ProjectsList list="recent" limit={5} direction="horizontal" />
    </div>
</main>