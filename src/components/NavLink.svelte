<script>
  import { Link } from "svelte-routing";
  export let to = "";
  function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
    const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
    // The object returned here is spread on the anchor element's attributes
    if (isActive) {
      return { class: "active" };
    } else {
      return { class: "link-item" };
    }
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>
