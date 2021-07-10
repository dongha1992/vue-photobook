/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlbum = /* GraphQL */ `
  subscription OnCreateAlbum($owner: String!) {
    onCreateAlbum(owner: $owner) {
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
export const onUpdateAlbum = /* GraphQL */ `
  subscription OnUpdateAlbum($owner: String!) {
    onUpdateAlbum(owner: $owner) {
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
export const onDeleteAlbum = /* GraphQL */ `
  subscription OnDeleteAlbum($owner: String!) {
    onDeleteAlbum(owner: $owner) {
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
export const onCreatePhoto = /* GraphQL */ `
  subscription OnCreatePhoto {
    onCreatePhoto {
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
export const onUpdatePhoto = /* GraphQL */ `
  subscription OnUpdatePhoto {
    onUpdatePhoto {
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
export const onDeletePhoto = /* GraphQL */ `
  subscription OnDeletePhoto {
    onDeletePhoto {
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
