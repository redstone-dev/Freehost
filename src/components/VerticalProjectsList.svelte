<script lang="ts">
    import Error from "../routes/+error.svelte";

    throw 'Please use ProjectsList instead of VerticalProjectsList';

    import ProjectDisplayCard from "./ProjectDisplayCard.svelte";

    export let list: string;
    export let limit: number;

    const projects = [
  {
    name: "Neurify",
    description: "A machine learning platform for neural network training and optimization.",
    url: "https://www.neurify.com",
    author: "John Doe"
  },
  {
    name: "PixelCraft",
    description: "An online community for pixel art enthusiasts to share and collaborate on pixel art projects.",
    url: "https://www.pixelcraft.io",
    author: "Jane Smith"
  },
  {
    name: "CryptoTracker",
    description: "A cryptocurrency portfolio tracker that provides real-time market data and analytics.",
    url: "https://www.cryptotracker.com",
    author: "Michael Johnson"
  },
  {
    name: "CodeScribe",
    description: "An AI-powered code documentation generator that simplifies the process of writing technical documentation.",
    url: "https://www.codescribe.io",
    author: "Sarah Anderson"
  },
  {
    name: "RecipeMaster",
    description: "A recipe management app that allows users to store, organize, and discover new recipes.",
    url: "https://www.recipemasterapp.com",
    author: "Alex Thompson"
  },
  {
    name: "GameRater",
    description: "A platform for gamers to rate and review video games, share gaming experiences, and connect with other players.",
    url: "https://www.gamerater.net",
    author: "Emily Wilson"
  },
  {
    name: "FitTrack",
    description: "A fitness tracking application that helps users set fitness goals, track their workouts, and monitor their progress.",
    url: "https://www.fittrackapp.com",
    author: "David Lee"
  },
  {
    name: "Artify",
    description: "An online art gallery that showcases and sells artwork from emerging and established artists.",
    url: "https://www.artifygallery.com",
    author: "Jessica Martinez"
  },
  {
    name: "EduLearn",
    description: "An e-learning platform that offers a wide range of courses on various subjects to enhance knowledge and skills.",
    url: "https://www.edulearn.com",
    author: "Robert Johnson"
  },
  {
    name: "EcoSaver",
    description: "A sustainability app that provides tips, challenges, and rewards for adopting eco-friendly habits in daily life.",
    url: "https://www.ecosaverapp.com",
    author: "Olivia Brown"
  }
];

export let direction: string;

const titleCase = function(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);

}

</script>

<style>
    main {
      background-color: #444;
      padding: 15px;
      max-width: min-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
</style>

<main style="--flexDir: {direction};">
    <h3>{titleCase(list.toString())} projects</h3>
    {#each projects.slice(0, limit) as project}
        <ProjectDisplayCard name={project.name} description={project.description} url={project.url} author={project.author} />
    {/each}
</main>