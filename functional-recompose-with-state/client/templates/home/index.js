Comps.Home = (props, context) => <div>
  {console.log(context)}
  <a href="/authors">view all authors</a>
  <a href="/posts">view all posts</a>
</div>

FlowRouter.route('/', {
  action () {
    Mount(Comps.Layout, {
      content: (props) => <Comps.Home {...props} />
    })
  },
  name: 'home'
})
