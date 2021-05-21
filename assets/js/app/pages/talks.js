import {
  PageHeader,
  Projects,
  HireMeFooter,
  Talk,
} from "../components/index.js";
import { useDB } from "../composables/useDB.js";

export default {
  components: {
    PageHeader,
    Projects,
    HireMeFooter,
    Talk,
  },
  template: `
    <PageHeader title="Talks">
        Want me to talk at your event? <router-link class="link-on-bg text-link" to="/contact">Get in touch</router-link>
    </PageHeader>
    <section class="section pt-5 px-3 px-lg-0">
        <div class="container">
            <Talk
                v-for="talk in talks"
                :source="talk.source"
                :id="talk.id"
                :type="talk.type"
                :title="talk.title"
                :description="talk.description"
                :date="talk.date"
            />
        </div>
    </section>
    <HireMeFooter/>
  `,
  setup(props) {
    const { talks } = useDB();
    return { talks };
  },
};
