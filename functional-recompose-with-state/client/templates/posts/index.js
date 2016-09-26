const container = r.compose(
  r.withState('filter', 'setFilter', {}),
  r.withState('toggle', 'setToggle', false),
)

const list = ({posts, filter, setFilter, toggle, setToggle}) => {
  const filteredPosts = _.filter(posts, filter)
  return <div>
    <button onClick={() => setToggle(!toggle)}>{toggle ? '显示' : '隐藏'}</button>
    {toggle ? <div>
      <h3>posts</h3>
      <div>{JSON.stringify(filter, null, 2)}</div>
      <button onClick={() => setFilter({})}>all</button>
      <button onClick={() => setFilter({ category: 'news' })}>news</button>
      <button onClick={() => setFilter({ category: 'tutorials' })}>tutorials</button>
      {filteredPosts.map(d => <div key={d._id}>
        <h3>{d.title}</h3>
        <p>{d.content}</p>
      </div>)}
    </div> : ''}
  </div>
}

Comps.Posts = container(list)

FlowRouter.route('/posts', {
  action () {
    Mount(Comps.Layout, {
      content: (props) => <Comps.Posts {...props} />
    })
  },
  name: 'posts'
})
