look up these links for the embeddings examples

- https://github.com/jinglescode/textual-similarity-universal-sentence-encoder/blob/master/package.json
- https://github.com/tensorflow/tfjs-models/blob/master/universal-sentence-encoder/
- https://github.com/openai/openai-cookbook/blob/main/examples/Clustering.ipynb
- https://github.com/openai/openai-cookbook/blob/main/examples/Question_answering_using_embeddings.ipynb

Vector Search

- https://www.youtube.com/watch?v=ogQUlS7CkYA
- use brave api and create search, create embeddings,

- Backend in NestJS
  - https://github.com/sharmavikashkr/chat-service-nestjs
- Front end is a react-native or flutter code
  - https://github.com/sharmavikashkr/chat_app_flutter
- Chat applicaiton using mongo and socket.io

  - https://github.com/neelabhsinha/Private-Chat-Application-using-MongoDB-and-Socket.io

- Embeddings
  - https://github.com/veekaybee/what_are_embeddings/blob/main/embeddings.pdf

## Overview:

- Create a go tool that does
  - Clean the text
  - Get all Named Entities
  - Get subject, object, verb for each entity
    - Identify adjectives
  - Create triples

## Fine details of Workflow:

- get data for search term
- do nlp on text
- add svo triples to graph - svo(subject verb object)
- update node labels and properties
- Dedup, clean, dedup and more clean
- create in memory graph
- generate embeddings
- do ML

- apply ML on the knowledge graph

* for gds use the sandbox not auradb
* cytoscape.js use the api for creating graphs

- Assignment to creat Custom NER
- follow up use case from Industry Expert

  - https://www.newscatcherapi.com/blog/train-custom-named-entity-recognition-ner-model-with-spacy-v3

- Embeddings
  take a common dataset of sentences
  create a emboeedings model from these
  create the similarity of these embeddings
  graph in a portal

  tf-idf vs transformers model
  https://towardsdatascience.com/easily-get-high-quality-embeddings-with-sentencetransformers-c61c0169864b

- Build an AI agent:
  https://youtu.be/ogQUlS7CkYA

- creating a cutom embedding projector

  - https://www.tensorflow.org/tensorboard/tensorboard_projector_plugin

- use a pre-trained word2vec model in go
  https://pkg.go.dev/code.sajari.com/word2vec#section-sourcefiles
  https://github.com/sajari/word2vec/tree/v1.0.1
  https://code.google.com/archive/p/word2vec/source/default/source
  freebase model - https://docs.google.com/file/d/0B7XkCwpI5KDYaDBDQm1tZGNDRHc/edit?usp=sharing
