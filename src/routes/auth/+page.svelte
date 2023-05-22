<!-- ChatGPT wrote this lmaoo -->

<script lang="ts">
    let signIn: boolean = false;
    let username: string = '';
    let password: string = '';

    function handleSubmit(): void {
        if (signIn) {
            // Perform login logic
            console.log('Logging in...');
            console.log('Username:', username);
            console.log('Password:', password);
        } else {
            // Perform signup logic
            console.log('Signing up...');
            console.log('Username:', username);
            console.log('Password:', password);
        }
    }
</script>

<title>Freehost - {signIn ? 'Login' : 'Sign Up'}</title>

<main animate-fade-in>
    <wrapper>
        <h2 brand-color>{signIn ? 'Login to' : 'Create'}</h2>
        <h4>an account</h4>

        <form action="/auth">
            <label for="username">Username: <small>required</small></label>
            <input type="text" id="username" bind:value={username} required>

            <label for="password">Password: <small>required</small></label>
            <input type="password" id="password" bind:value={password} required>

            <button type="submit">{signIn ? 'Login' : 'Sign Up'}</button>

            {#if signIn}
                <p>New user? <a on:click={() => signIn = false}>Sign Up</a></p>
            {:else}
                <p>Already have an account? <a on:click={() => signIn = true}>Login</a></p>
            {/if}
        </form>



        <p><a href='/'>Back to the homepage</a></p>
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

h2 {
    margin-top: 0;
}

label, input {
    display: block;
    margin-bottom: 10px;
}

button {
    margin-top: 10px;
}
</style>