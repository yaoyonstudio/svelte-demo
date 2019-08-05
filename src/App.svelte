<script>
  import { Router, Link, Route } from "svelte-routing";

  import NavBar from "./components/NavBar.svelte";

  import Home from "./pages/Home.svelte";
  import PostDetail from "./pages/PostDetail.svelte";
  import About from "./pages/About.svelte";
</script>

<Router>
  <NavBar />
  <div class="mt-4">
    <Route path="post/:id" component={PostDetail} />
    <Route path="about" component={About} />
    <Route path="/">
      <Home />
    </Route>
  </div>
</Router>
