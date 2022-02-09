export const IS_FOLLOWER = 0b1;
export const IS_FOLLOWING = 0b10;

export function is_follower(x : number) {
  return (x & IS_FOLLOWER) == IS_FOLLOWER;
}
export function is_following(x : number) {
  return (x & IS_FOLLOWING) == IS_FOLLOWING;
}


export const connections_data = {
  "0x0017f7adf1b404298efa3015ca0b56961fea4c34": 1,
  "0x058c802a37b0cece77277a2776b56909e3cd3838": 3,
  "0x05cbc3e7ede3785e322f17fe5a26da622e2b7c1c": 1,
  "0x0644161438ce1e23f050573d0e45a86b98910425": 3,
  "0x09e95552456b177d9ee103ec96fcb37344a7cb3d": 3,
  "0x0cc4cfacfbfda1ff5ea003e5a59d17b4c55a5050": 3,
  "0x0d8c1eb0f4800b16b229453f1904aa96913f94d2": 1,
  "0x1090529cbf3c1e774e185e817a8be27b0118d1a6": 3,
  "0x11a7dcf5beb6c04e6ae72c74870c6ca3f0d1afd9": 3,
  "0x156dd612e9dfb0b448b6a164e14b36634ba86dcb": 1,
  "0x15a0dd1792de80f88573ab3f4b1a2e996f917ba0": 1,
  "0x19ab096040f13cfa6a18ab2e0ca786bdfe8eacd0": 1,
  "0x1dd779850b584e10e8f95b03a2a86b90b312d75d": 1,
  "0x1edcd6be0b63316a75f79cb970401746958dcf11": 3,
  "0x23c1c430cded2aabd91c086b6db5e5ea52315170": 1,
  "0x2f1aa4fa1c42883f43e91726e16115b3a4bf69b3": 3,
  "0x372af91d4254d298606561cc29dd689851916ab0": 1,
  "0x3a453318fbece65efc62fc3a8c6ade2a97b65f8c": 1,
  "0x3e7f4c9f08c5cf5a58e58c41201342ca43550c0b": 1,
  "0x604b79eb602ed52c814d90f353c8f10057731302": 1,
  "0x0029566ff9fea60fb57c8f27bf631384fef2bccf": 2,
  "0x02547a0c138e6b740511a4aa9028aa686526a638": 2,
  "0x02a5c980029cb470ac89df2e2de1cf453aee6558": 2,
  "0x04631ba864538191a90aeabb2c060832f2b8e959": 2,
  "0x0e40e1e01351861c90d8f28ba4d8b1c11fb61898": 2,
  "0x14408e4706f68ab5af95d3dd81ce926145050e5b": 2,
  "0x148d59faf10b52063071eddf4aaf63a395f2d41c": 2,
  "0x22f6167a22c1765e2e9d124b61d6d723053a7ff1": 2,
  "0x255c90b54f316d06503cdafe4265d381cf29e6b4": 2,
  "0x2e7b05c3de55ab1533c7d951727965355a7d0685": 2,
  "0x305f3af8d6fed19d0f63c0be739f65097cb3faa6": 2,
  "0x3407f74b94f6c4c1580ce2d42fe778372478be0f": 2
};