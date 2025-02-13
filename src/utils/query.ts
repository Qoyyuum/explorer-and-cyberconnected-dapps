import {
  FollowListInfoArgs,
  SearchUserInfoArgs,
  FollowListInfoResp,
  SearchUserInfoResp,
  RecomendationListInfoArgs,
  RecommendationInfo
} from './types';

const endPoint = 'https://api.cybertino.io/connect/';

export const recommendationListSchema = ({
  address
} : RecomendationListInfoArgs ) => {
  return {
    operationName: 'recommendationsInfo',
    query: `query recommendationsInfo($address: String!) {
      recommendations(address: $address) {
          data {
            list {
              address
              recommendationReason
            }
          }
        }
      }
    `,
    variables: {
      address,
    },
  };
};

export const followListInfoSchema = ({
  address,
  namespace,
  network,
  followingFirst,
  followingAfter,
  followerFirst,
  followerAfter,
}: FollowListInfoArgs) => {
  return {
    operationName: 'followListInfo',
    query: `query followListInfo($address: String!, $namespace: String, $network: Network, $followingFirst: Int, $followingAfter: String, $followerFirst: Int, $followerAfter: String) {
      identity(address: $address, network: $network) {
        followingCount(namespace: $namespace)
        followerCount(namespace: $namespace)
        followings(namespace: $namespace, first: $followingFirst, after: $followingAfter) {
          pageInfo {
            endCursor
            hasNextPage
          }
          list {
            address
            ens
            avatar
          }
        }
        followers(namespace: $namespace, first: $followerFirst, after: $followerAfter) {
          pageInfo {
            endCursor
            hasNextPage
          }
          list {
            address
            ens
            avatar
          }
        }
      }
    }`,
    variables: {
      address,
      namespace,
      network,
      followingFirst,
      followingAfter,
      followerFirst,
      followerAfter,
    },
  };
};

export const searchUserInfoSchema = ({
  fromAddr,
  toAddr,
  namespace,
  network,
}: SearchUserInfoArgs) => {
  return {
    operationName: 'searchUserInfo',
    query: `query searchUserInfo($fromAddr: String!, $toAddr: String!, $namespace: String, $network: Network) {
      identity(address: $toAddr, network: $network) {
        address
        ens
        avatar
      }
      followStatus(fromAddr: $fromAddr, toAddr: $toAddr, namespace: $namespace, network: $network) {
        isFollowed
        isFollowing
      }
    }`,
    variables: {
      fromAddr,
      toAddr,
      namespace,
      network,
    },
  };
};

export const querySchemas = {
  followListInfo: followListInfoSchema,
  searchUserInfo: searchUserInfoSchema,
  recommendationInfo: recommendationListSchema,
};

export const request = async (url = '', data = {}) => {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Origin': 'https://cyberconnect-explorer.netlify.app',
      // 'Access-Control-Request-Method': ['POST', 'OPTIONS'],
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return response.json();
};

export const handleQuery = (
  data: {
    query: string;
    variables: object;
    operationName: string;
  },
  url: string
) => {
  return request(url, data);
};

export const recommendationListQuery = async ({
  address
}: RecomendationListInfoArgs ) => {
  const schema = querySchemas['recommendationInfo']({ address });

  const resp = await handleQuery(schema, endPoint);

  return (resp?.data?.recommendations?.data?.list as RecommendationInfo) || null;
}

export const followListInfoQuery = async ({
  address,
  namespace,
  network,
  followingFirst,
  followingAfter,
  followerFirst,
  followerAfter,
}: FollowListInfoArgs) => {
  const schema = querySchemas['followListInfo']({
    address,
    namespace,
    network,
    followingFirst,
    followingAfter,
    followerFirst,
    followerAfter,
  });
  const resp = await handleQuery(schema, endPoint);

  return (resp?.data?.identity as FollowListInfoResp) || null;
};

export const searchUserInfoQuery = async ({
  fromAddr,
  toAddr,
  namespace,
  network,
}: SearchUserInfoArgs) => {
  const schema = querySchemas['searchUserInfo']({
    fromAddr,
    toAddr,
    namespace,
    network,
  });
  const resp = await handleQuery(schema, endPoint);

  return (resp?.data as SearchUserInfoResp) || null;
};
