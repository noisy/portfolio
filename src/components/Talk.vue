<template>
  <div
    class="row mb-5 flex-column flex-lg-row bg-white shadow-sm"
    :class="[...talk.filterTags, talk.language]"
  >
    <!-- filters: {{ JSON.stringify([...talk.filterTags, talk.language]) }} -->
    <div class="col-12 col-auto talk-media-holder ratio ratio-16x9 me-md-3">
      <iframe
        v-if="talk.source == 'youtube'"
        width="560"
        height="315"
        :src="'https://www.youtube.com/embed/' + talk.id"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      >
      </iframe>
    </div>

    <div class="col p-4">
      <h4>{{ talk.title }}</h4>
      <ul class="talk-meta list-inline mb-2">
        <li class="list-inline-item me-3">
          <font-awesome-icon :icon="['far', 'clock']" class="me-2" />{{
            talk.date
          }}
        </li>
        <li class="list-inline-item me-3" style="text-transform: capitalize">
          <font-awesome-icon
            v-if="talk.type == 'podcast'"
            class="me-2"
            icon="headphones"
          />
          <font-awesome-icon
            v-else-if="talk.type == 'video'"
            class="me-2"
            icon="video"
          />
          {{ talk.type }}
        </li>
        <li class="list-inline-item me-3">
          <span class="flag me-2" style="margin-top: -2px">
            {{ flags[talk.language] }}
          </span>
          <span class="lang">{{ talk.language }}</span>
        </li>
      </ul>
      <div class="talk-content">
        {{
          talk.description ||
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus penatibus et magnis dis parturient montes, nascetur ridiculus mus.."
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from "vue";
import { useDB } from "@/composables";
import { ITalk } from "@/types";

export default defineComponent({
  name: "Talk",
  props: {
    talk: {
      type: Object as PropType<ITalk>,
      required: true,
    },
  },
  setup() {
    const { flags } = useDB();
    return { flags };
  },
});
</script>
