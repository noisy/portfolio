# Seerene

I've worked on this project during my years at [STXnext](). It is a project of a German company of the same name. STXnext offered me the possibility to be a part of a small team of 3 developers, which goal was to show STXnext's ability to work on the development of this product, and thanks to that convince the client to build with STXNext a bigger team or two, with more programmers, QAs and scrum master.

## Chalanges

### New frontend framework

In 2015, I had a lot of experience with Django&Python, only some experience with jQuery and BackboneJS, but no prior experience with Angular JS. That was a challenge of its own for me.

Fortunately, instead of focusing just on things which I knew better - backend, we were able to organize our work in a way, which give everyone in a team possibility to contribute in areas where everyone felt the strongest... but leaving the opportunity to contribute smaller things also in other areas. That helped everyone in the team learn a lot of new things.

### Bootstrapping new team for a client, new code base, no know-how

Because we formed a new independent team, at the beginning we started with a very narrow understanding of the codebase, with limited know-how about the whole project. We had contact with all in-house developers and a Product Owner from Seerene, however as you can imagine it was more difficult, to learn about all nitty-gritty details when without having people with the knowledge inside the same room. To deal with that we needed to spend a lot of time on talks via slack or on video calls.

The important part was to focus on asking the right questions, to learn things that were truly necessary to develop scoped tasks.

I believe the key to doing well all of that was in really good Planning and Estimation meetings, during which we together dissected all problems while trying to identify risks.

### Lack of infrastructure on our end; Custom CI build-system

To be able to work on a product efficiently, our team needed to also set up a few production-like instances of the project: our local production, staging, few test instances, which later were used by our QAs.

Earlier there were attempts to do those deploys with some basic bash scripts. Despite the simplicity, our team quickly realize that this solution was not flexible enough and wasn't scaling well.

At some point I started working on proper containerization with Docker of the whole thing, creating with Jenkins the building pipeline (CI), responsible for running all unit and E2E tests, but also capable of building new tests instances on-demand with just a few clicks. One of the most important features of that build system (which speeds up the work of our QAs significantly), was the ability to clone prepared databases between instances, with just a few clicks.

All instances build on-demand were also always automatically dynamically set up with their separate subdomain and with the support of HTTPS & SSL certificates.

I've built that build system on my own from scratch using [Cookiecuttter](https://github.com/cookiecutter/Cookiecutter) CLI tool and its Jinja template language. That helped keep the whole thing very simple, yet powerful and robust.

Before I left STXNext and this project, I've successfully transferred all my knowledge about this build system to other developers, which I believe also proved it was easy to understand also from the code's perspective.

## Optimazing speed of queries to database

To be precise, it was not something on which I've worked personally, however my team did. I've decided to mention this anyway, becuse of the fact how this task was handled. Two guys from our team, which were the most into databases... decided to work on this together. It tooks them over a month of pair programming, analyzing, refactoring everything together, however the result was stunning. Without any majyor hiccups, they optimized execution time of business critical queries, from dozens of minutes, to hundreds of miliseconds.

While working in this team, I've learned how powerfull can be a pair-programming as a tool to develop quickly important parts of code with high quality in mind, which also speed ups learning process of participating developers tremendously. I've personally used that technique many times later within that project, on smaller scalle. Since then, I'm huge fan of pair programming! (Which BTW, what my other project proved... can be succesfully done also while working remotly!)

## Biggest Lessons Learned

Often the biggest lessons you learn heppens after some big mistakes. Fortunatelly, this time it was not like that.

But even more outstanding thing for me was a realization, that with right people and right process in place, it is very possible, to work efficiently as a group of developers, WITHOUT a manager or an official team leader. Our team was a proof that it is possible to create a team, which can self-organize own work. In my opition it was possible mainly thanks to our Scrum Master (who off-loaded us in many ways from organizationall stuff, however which however was not our supervisor). What's the point, you may ask?

Personally, it was making a huge difference for me knowing that STXNext and it's client believed in us and trusted us, that we are capable of organizing our work on our own was. I believe thanks to that everyone in the team felt more empowered and cared about final outcome even more.

## Conclusion/Summary

When I've started working on this project, there was just a 3 developers from STXNext working on that. I believe work of this initial team was crucial in a process of building strong and long lasting relationship of STXNext and it's client, which before I left... resulted with existinance of 3 big teams, with 5 devs & 2 QAs each, with support of 2 scrum masters and 2 Product Owners.

9 months after leaving, I've convinced one of my former team-mates (the most expirienced one), to change job too, and to work with me together, for another company: Tokenika, for which I've already was working on for a few months.
