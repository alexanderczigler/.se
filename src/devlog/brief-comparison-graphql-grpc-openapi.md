---
title: A brief comparison of GraphQL, gRPC and OpenAPI
published: 2021-09-24
description: I spent a day trying to build a simple API using three different frameworks.
tags:
slug: brief-comparison-graphql-grpc-openapi
---

At Iteam we dedicate one friday of every month to experiment and learn. We call these fridays "lab days". Since I have been working with mostly .NET stuff lately I thought I would take the time to freshen up on API frameworks and nodejs today. So I decided to spend a day to build a simple API using each of GraphQL, gRPC and OpenAPI and then sum up whatever thoughts I would have at the end of the day.

With time being very limited I focused on what the experience is setting up a fresh project and getting GET + POST routes working. This is in no way a deep analysis.

My lab code is [available on GitHub](https://github.com/alexanderczigler/lab-day-2021-09-24).

## GraphQL

I have some previous experience working with GraphQL backends so this was not completely new to me. I think GraphQL adds a pretty nice layer of control between the backend and frontend(s) and the built-in query tool is wonderful. When working with other developers GraphQL makes it easy to discuss the API.

The documentation is good and there are plenty of examples out there to learn from. What I do not like about it is that when I do something wrong I often get error messages that are hard to decipher. GraphQL has a bit of a learning curve to it but I think it is worth the time and effort.

One thing I enjoy about GraphQL is the built-in query tool (and Insomnia having that feature as well). Once I was up and running it was easy to build queries. I also think working with GraphQL is structured and it is easy to add comments to the schema. It is also easy to find examples and documentation online.

What I dislike about GraphQL is that the query language has a bit of a learning curve. Especially since some of the error messages you get when you are a newbie can be quite hard to decipher. I also get the feeling that some of the query syntax is a bit repetitive.

## gRPC

I am completely new to gRPC. At a first glance it looks a bit different than my usual way of making http(s) calls between backends and/or frontend and backend. The code examples look a bit complicated and scary because they include a bunch of different languages, but it didn't take long until I found a nodejs example in the public grpc repos.

As I mentioned before, I barely had time to scratch the surface of either of the frameworks. From my brief encounter with gRPC I found the .proto files rather nice; they are easy to read and work with. In a larger project it is nice to be able to split them up into different modules as well. I think gRPC is very interesting and it seems like a nice alternative to using fetch/http(s) when building integrations between microservices.

Sadly I had no time to try to get my gRPC API to work with a web client. I understand you need a another component (proxy) for that to work. Maybe I will have a look at that in the future.

## OpenAPI

For some reason I struggled making requestBody work when building my API using OpenAPI. My experience so far is that there is a lot of documentation and example code out there. However it is a bit hard to find exactly what you are looking for and finding things that match the version you are using.

I think it is nice that you can choose to spec your API in using either JSON or YAML. It is also very easy and intuitive to split your code and API spec into different modules to keep files small and the project in order. It is equally easy to version the API.

## Conclusion

This day went by way too fast and I wish I had more time to deep-dive into each of the frameworks. I would love to compare the ways of generating API documentation in each, as well as testing performance and trying things like websockets.

After spending a couple of hours with each framework I would say I am most curious about learning more about gRPC.
