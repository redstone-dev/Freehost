<script>
    import Navbar from "../components/Navbar.svelte";
    import "./app.css"
</script>

<Navbar items={[
    { imgPath: "/Logo2.png", displayName: "Home", url: "/" },
    { displayName: "About", url: "/about" },
    { displayName: "Login/Signup", url: "/auth" },
    { displayName: "Create Project", url: "/sites/new", requiresLogin: true },
]} />

<slot></slot>