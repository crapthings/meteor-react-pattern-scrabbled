Comps.Authors = props => <div>
  {props.authors.map(d => <div key={d._id}>
    <h3>{d.name}</h3>
  </div>)}
</div>

FlowRouter.route('/authors', {
  action () {
    Mount(Comps.Layout, {
      content: (props) => <Comps.Authors {...props} />
    })
  },
  name: 'authors'
})
