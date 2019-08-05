<script>
  import { Link } from "svelte-routing";

  export let data;
</script>

<style>

</style>

<div class="card mb-3">
  <div class="row no-gutters">

    {#if data._embedded['wp:featuredmedia']}
      <div class="col-md-3 p-3">
        <img
          src={data._embedded['wp:featuredmedia'][0].source_url}
          class="card-img"
          alt={data.title.rendered} />
      </div>
    {/if}

    <div class={data._embedded['wp:featuredmedia'] ? 'col-md-9' : 'col-md-12'}>
      <div class="card-body">
        <h5 class="card-title">{data.title.rendered}</h5>
        <p class="card-text">
          {@html data.excerpt.rendered}
        </p>
        <div class="d-flex flex-row align-items-center justify-content-between">
          <p class="card-text mb-0">
            <small class="text-muted">{data.date}</small>
          </p>
          <Link
            to={`/post/${data.id}`}
            class="d-block btn btn-primary stretched-link">
            查看详情
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
