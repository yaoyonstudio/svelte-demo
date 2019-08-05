<script>
  import { blogServices } from "../services.js";

  export let id;
  export let post = null;

  async function fetchPostDetail(id) {
    if (!id) return null;
    const data = await blogServices.getPostDetailService(id);
    if (data) {
      post = data;
    }
  }

  if (id) {
    fetchPostDetail(id);
  }
</script>

<div class="container">
  {#if id && !post}
    <div class="d-flex flex-column align-items-center justify-content-center">
      <div class="pt-4 pb-4">正在加载中</div>
    </div>
  {/if}

  {#if post}
    <h2 class="text-center">{post.title.rendered}</h2>

    <div contenteditable="post-content">
      <div>
        {@html post.content.rendered}
      </div>
    </div>
  {/if}
</div>
