class MessagesController < ApplicationController
  def index
  end
<<<<<<< HEAD
<<<<<<< HEAD


  def create
  end

  private

  def message_params
    params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
end
  def create
  end
=======
end
  def create
  end
>>>>>>> parent of 1f191a8... Add:　メッセージ送信機能を実装
=======
end
  def create
  end
>>>>>>> parent of 1f191a8... Add:　メッセージ送信機能を実装
