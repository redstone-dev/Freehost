<script>
    let ram = 1024;
    let storage = 1024;
    let siteName = '';
    let serverHostingRequired = false;
    let siteDesc = '';

    let importFromGH = false;
</script>

<main animate-fade-in>
    <wrapper>
        <h1>{siteName || 'New Project'}</h1>
        {#if siteDesc}
            <pre>{siteDesc}</pre>
        {/if}

        <a on:click={() => importFromGH = !importFromGH}>{!importFromGH ? 'Import from GitHub' : 'Create new project'}</a>

        {#if !importFromGH}
            <form action="/sites/new" method="post">
                <h3>Details</h3>
                    <label for="site-name">Project Name</label>
                    <br>
                    <input type="text" id="site-name" bind:value={siteName} />
                    <br>
                    <br>

                    <label for="site-name">Project Description</label>
                    <br>
                    <textarea id="site-name" bind:value={siteDesc} />
                    <br>
                    <br>
                    <input type="checkbox" bind:checked={serverHostingRequired}> Server hosting
                {#if serverHostingRequired}
                    <h3>Resources</h3>
                        <label for="resources-ram">RAM</label>
                        <br>
                        <input type="range" name="resources-ram" id="resources-ram" min="512" max="3072" bind:value={ram}>
                        <br>
                        <input type="number" bind:value={ram} /> MB RAM
                        <br>
                        <br>
                        <input type="range" name="resources-storage" id="resources-storage" min="256" max="4096" bind:value={storage}>
                        <br>
                        <input type="number" bind:value={storage} /> MB storage
                        <br>
                        <br>
                        {#if ram >= 2500 || storage >= 3500}
                            <p>Need more? <a href="/contact">Contact us</a></p>
                        {/if}
                        <p>Keep in mind that every project's needs are different. You should allocate the maximum amount of resources needed (without being too exorbitant).</p>
                {/if}
            </form>
        {:else}
            <h3>Import from GitHub</h3>
            <p>You can import your existing code from GitHub.</p>
            <p>This requires a GitHub account.</p>
            <ol></ol>
        {/if}
    </wrapper>
</main>

<style>
    wrapper {
        max-width: 40vw;
        margin-top: 25vh;
        height: 100%;
    }

    main {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>