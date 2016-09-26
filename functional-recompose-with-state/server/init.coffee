_ = require 'lodash'

faker = require 'faker'

Authors.remove {}

Posts.remove {}

Meteor.startup ->

  unless Authors.findOne {}

    authorIds = _.times 20, ->
      Authors.insert
        name: faker.name.findName()

  unless Posts.findOne {}

    _.times 20, ->
      Posts.insert
        title: faker.lorem.sentence()
        content: faker.lorem.paragraphs()
        authorId: _.sample authorIds
        category: 'news'
        createdAt: new Date()

    _.times 20, ->
      Posts.insert
        title: faker.lorem.sentence()
        content: faker.lorem.paragraphs()
        authorId: _.sample authorIds
        category: 'tutorials'
        createdAt: new Date()
