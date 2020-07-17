class MessagesController < ApplicationController
  def index
  end
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
end
>>>>>>> parent of 1f191a8... Add:　メッセージ送信機能を実装
  def create
  end
<<<<<<< HEAD

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
=======
end
>>>>>>> parent of a676ac5... Add:　該当するアクションをコントローラに定義
=======
>>>>>>> parent of 1f191a8... Add:　メッセージ送信機能を実装
=======
end
  def create
  end
>>>>>>> parent of 1f191a8... Add:　メッセージ送信機能を実装
