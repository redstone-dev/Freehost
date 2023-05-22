<script lang="ts">
    export let name: string;
    export let description: string;
    export let url: string;
    export let author: string;


</script>

<style>
    .description {
        max-width: 10em;
        max-height: 5em;
        overflow-y: scroll;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 10px;
        background-color: #333;
        padding: 10px;
        border-radius: 8px;
    }
</style>

<div class="card">
    <p><a href={url}>{name}</a> by <i>{author}</i></p>
    <p class="description">{description}</p>
</div>