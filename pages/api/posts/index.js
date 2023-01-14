import { posts } from "../../../src/data/data";

export default function handler(req, res) {
    res.status(200).json(posts)
}
