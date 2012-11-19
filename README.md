# Promise ALL the things! #

Code examples for Vilnius JS meetup, November 20, 2012

## Problem ##

Async feels hard. It is only natural to want things to look-and-feel sync(ish).

When building UI, on rarely goes into deeply nested callbacks - interactions usually result in one "response".

When building in node, programs need to gather data from multiple data sources and combine it.

## Simple callbacks are OK until... ##

* You need proper error handling
* You need to load data in a sequence
* You need to load data in parallel

## Async.js style libs are OK until... ##

* You need to share loaded data

## Events are different ##

* Each event can happen multiple times with multiple values
	* A promise gets fulfilled (resolved or rejected) exactly once
* Event's are not "replayed" to subscribers
	* Once a promise is fulfilled - every subscriber will get exactly the same value/reason.

## Oh yeah... so what's a promise anyways? ##

In computer science, future, promise, and delay refer to bla bla synchronizing bla bla object bla bla proxy bla bla.
* wat http://en.wikipedia.org/wiki/Futures_and_promises

[In JavaScript science] A promise represents the eventual value returned from the single completion of an operation.
* wat http://wiki.commonjs.org/wiki/Promises/A

[In non-scientific daily life] A promise has a .then(), which takes subscribers and calls them when it is resolved/rejected.
* .then()s can be chained and pass on then values/promises from their subscribers.

## Gotchas and features ##

* always ALWAYS call done() // FKA end()
* execution order guarantees
	* callback is always async
	* chained callbacks always in order
	* see: https://github.com/promises-aplus/promises-spec
* execution order gotchas
	* when you have multiple subscribers, they are executed breadth-first
	* fail/fin/then/spread/etc in Q are all really just a fancy then()
* not all promises are created equal
	* value and state should not change once fulfilled
	* chain-ability is _key_
	* see: https://gist.github.com/3889970

## Async is fun ##

Love it.
