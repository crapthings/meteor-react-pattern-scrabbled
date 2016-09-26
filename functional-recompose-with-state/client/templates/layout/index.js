import Nav from './nav'

const defaultTracker = (props, onData) => {

  const loaded = _.every([
    Meteor.subscribe('authors').ready(),
    Meteor.subscribe('posts').ready(),
  ])

  const authors = Authors.find().fetch()

  const posts = Posts.find({}, {
    sort: { createdAt: -1 }
  }).fetch()

  loaded && onData(null, { authors, posts })

}

const defaultRender = (props) => <div>
  <Nav />
  {props.content(props)}
</div>

Comps.Layout = Container(defaultTracker)(defaultRender)
