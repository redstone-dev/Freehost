<script lang=ts>
    let message = "";
</script>



<h1>Contact Us</h1>
<p>Need to contact us? Use this page.</p>

<h2>Quick Messages</h2>
<p>There are lots of common requests - so we made it faster.</p>
<button on:click={() => message += `I'd like some more resources for my project (project name)'s server:\n(amount) MB RAM\n(amount) MB storage`}>More server resources</button>
<br>

<button on:click={() => message += `I found a project called (project name) that breaks the rules.`}>Rule-breaking project</button>
<br>
<br>

<textarea name="message" id="message" cols="30" rows="10" placeholder="Your message here" bind:value={message}></textarea>
<br>
<button on:click={() => alert(message)}>Submit</button>