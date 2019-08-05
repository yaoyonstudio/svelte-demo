<script>
  import PostItem from "../components/PostItem.svelte";
  import { blogServices } from "../services.js";

  let page = 0;
  let per_page = 8;
  export let hasMore = true;
  export let isLoading = false;
  export let posts = [];

  async function fetchPost() {
    if (!hasMore || isLoading) return;
    page += 1;
    isLoading = true;

    // const data = await blogServices.fetchPostService(page, per_page);
    const data = await blogServices.getPostListService(
      { page, per_page },
      res => {
        console.log("ok:", res);
      },
      error => {
        console.log("error:", error);
      }
    );

    isLoading = false;
    if (!data.length || data.length < per_page) {
      hasMore = false;
    }
    posts = [...posts, ...data];
    console.log(posts);
  }

  fetchPost();
</script>

<style>

</style>

<div class="container">

  <div class="post-list">
    {#if posts && posts.length > 0}
      {#each posts as post, i}
        <PostItem data={post} />
      {/each}
    {/if}

    {#if isLoading}
      <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary m-4" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    {/if}
    {#if !isLoading && !hasMore}
      <div class="d-flex flex-column align-items-center justify-content-center">
        <div class="pt-4 pb-4">没有更多文章</div>
      </div>
    {/if}
    {#if !isLoading && hasMore}
      <div class="pt-4 pb-4 ">
        <button
          class="d-block pl-4 pr-4 btn btn-primary mx-auto"
          on:click={fetchPost}>
          加载更多文章
        </button>
      </div>
    {/if}
  </div>
</div>
