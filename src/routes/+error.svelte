<script>
    import { page } from '$app/stores';
</script>

<h1>Error {$page.status}</h1>
<p>This means "{$page.error?.message}" in Nerdspeak.</p>

<a href="/">🚶 Go back to the home page</a>