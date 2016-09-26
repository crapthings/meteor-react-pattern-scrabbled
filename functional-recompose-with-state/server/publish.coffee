Meteor.publish 'authors', ->
  Authors.find {}

Meteor.publish 'posts', ->
  Posts.find({}, {
    sort:
      createdAt: -1
  })
