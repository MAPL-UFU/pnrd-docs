<a href="http://www.mecanica.ufu.br/laboratorio/laboratorio-de-planejamento-automatico-de-manufatura">
		<img width="200" src="./MAPL-UFU.png" alt="MAPL Logo" />
</a>

<hr/>

**Welcome to the PNRD Documentation!** In this Documentation we will present the core concepts and  implementation of an innovative approach called PNRD(elementary Petri Net inside a RFID distributed Database) and its variation, the inverted PNRD called iPNRD. We will describe everything you need to know to deploy your own applications using PNRD.

> Originally, PNRD was developed for the identification and monitoring of passive agents, such as commercial items, parts, logistics units, and physical products. The process that an object must follow is associated with its behavioral model through Petri net data structure. Thus, PNRD is a formal data structure grounded in elementary Petri net which stores Petri net equation parts in RFID components: tag and reader —  _Tavares, J.J.P.Z.D.S._ [PNRD and iPNRD Integration Assisting Adaptive Control in Block World Domain](pnrd-ipnrd-in-block-world-domain.md)


The documentation discusses:

* What the PNRD is and the fundamental concepts for its implementation. [What is PNRD?](what-is-pnrd.md)
* [PNRD Arduino Core Concepts](reference/pnrd-core-arduino.md).
* A practical implementation of PNRD using Arduino.
* How to be part of the community built around this new ecosystem.


## The Libraries for Arduino

The Arduino ecosystem for PNRD implementation is composed of 3 Libs.

* The Petri Net Lib: Designed for deal with application's Petri Net Setting, Verification of exceptions, trigger events and the boolean conditions associated with transations

* The PNRD lib: Created to define what information will be saved in the tag and Update of the tag's history.

* The PN532 reader Lib: Has Methods to write and read the RFID tag

Refer to [Getting Started With PNRD](reference/pnrd-core-arduino.md) for further information.


## PNRD Arduino Core Concepts

We discuss the technical concepts of arduino libraries.

* [PNRD Arduino Core Concepts](reference/pnrd-core-arduino.md).


## Reference

* [Petri Net: Key Concepts](petri-net.md) &mdash; Introduces you to the fundamental concepts of the Petri Network.
* [What is a PNRD?](what-is-pnrd.md) &mdash; Introduces you to the fundamental of the PNRD and the core applications.
* [Getting Started With PNRD](pnrd-arduino.md) &mdash; Tutorial for Cellular Manufacturing Aplication with PNRD and Arduino.
* [IPNRD and Applications](ipnrd-applications.md) &mdash; Introduces you to the fundamental of the IPNRD with practical exemple.
* [PNRD Arduino Core Concepts](pnrd-core-arduino.md) &mdash; Provides the concept and implementation details of the PNRD Arduino Libraries.
