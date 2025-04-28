import { CommentContentArea, CommentUserArea } from "./styles"

const Commentary = () => {
    return (
        <div>
            <CommentUserArea>
                <h4>Usuário que fez o comentário</h4>
            </CommentUserArea>
            <CommentContentArea>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut exercitationem accusamus modi quis fugit.</p>
            </CommentContentArea>
        </div>
    )
}

export default Commentary