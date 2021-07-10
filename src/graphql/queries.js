/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlbum = /* GraphQL */ `
  query GetAlbum($id: ID!) {
    getAlbum(id: $id) {
      id
      owner
      ownerId
      name
      createdAt
      updatedAt
      photos {
        items {
          id
          createdAt
          updatedAt
          album {
            id
            owner
            ownerId
            name
            createdAt
            updatedAt
            photos {
              nextToken
            }
          }
          fullsize {
            region
            longitude
            altitude
          }
          thumbnail {
            region
            longitude
            altitude
          }
          contentType
          gps {
            latitude
            longitude
            altitude
          }
          height
          width
          size
          owner
        }
        nextToken
      }
    }
  }
`;
export const listAlbums = /* GraphQL */ `
  query ListAlbums(
    $filter: ModelAlbumFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlbums(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              owner
              ownerId
              name
              createdAt
              updatedAt
            }
            fullsize {
              region
              longitude
              altitude
            }
            thumbnail {
              region
              longitude
              altitude
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            size
            owner
          }
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPhoto = /* GraphQL */ `
  query GetPhoto($id: ID!) {
    getPhoto(id: $id) {
      id
      createdAt
      updatedAt
      album {
        id
        owner
        ownerId
        name
        createdAt
        updatedAt
        photos {
          items {
            id
            createdAt
            updatedAt
            album {
              id
              owner
              ownerId
              name
              createdAt
              updatedAt
            }
            fullsize {
              region
              longitude
              altitude
            }
            thumbnail {
              region
              longitude
              altitude
            }
            contentType
            gps {
              latitude
              longitude
              altitude
            }
            height
            width
            size
            owner
          }
          nextToken
        }
      }
      fullsize {
        region
        longitude
        altitude
      }
      thumbnail {
        region
        longitude
        altitude
      }
      contentType
      gps {
        latitude
        longitude
        altitude
      }
      height
      width
      size
      owner
    }
  }
`;
export const listPhotos = /* GraphQL */ `
  query ListPhotos(
    $filter: ModelPhotoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        album {
          id
          owner
          ownerId
          name
          createdAt
          updatedAt
          photos {
            items {
              id
              createdAt
              updatedAt
              contentType
              height
              width
              size
              owner
            }
            nextToken
          }
        }
        fullsize {
          region
          longitude
          altitude
        }
        thumbnail {
          region
          longitude
          altitude
        }
        contentType
        gps {
          latitude
          longitude
          altitude
        }
        height
        width
        size
        owner
      }
      nextToken
    }
  }
`;
