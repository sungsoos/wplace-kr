// ==UserScript==
// @name         wplace 한국어 번역
// @namespace    https://wplace.live
// @version      1.0.0
// @description  wplace.live를 한국어로 번역합니다.
// @author       sungsoos
// @match        *://*.wplace.live/*
// @run-at       document-start
// @run-at       document-idle
// @grant        none
// @license      MIT
// ==/UserScript==

const WPLACE_TRANSLATIONS = {
  ko: {
    "#000000": "#000000",
    "), then restart the browser.": "), 그리고 브라우저를 재시작하세요.",
    "+2 max. charge/level": "최대 +2 충전/레벨",
    "1 day": "1일",
    "1 event per frame": "1 프레임당 이벤트",
    "1 hour": "1시간",
    "24 hours": "1일",
    "7 days": "7일",
    "<strong>One account per person.</strong> Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.<br>Painting in Wplace using <strong>virtual machines, residential proxies, multi-accounting browsers, or any automation tool</strong> is not advised and may lead to <strong>permanent bans</strong>.<br><br><strong>Warning:</strong> sharing a device with family or other people can cause accounts to be flagged as multi-accounting and result in suspension.": "<strong>한 사람당 하나의 계정.</strong> 봇, 스크립트, 브라우저 자동화 또는 익스플로잇을 이용해 불공정한 이득을 취하는 행위는 엄격히 금지됩니다.<br><strong>가상 머신, 주거용 프록시, 다중 계정 브라우저 또는 모든 자동화 도구</strong>를 사용한 Wplace 칠하기는 권장하지 않으며, <strong>영구 정지</strong>될 수 있습니다.<br><br><strong>경고:</strong> 가족이나 다른 사람과 기기를 공유하면 다중 계정으로 감지되어 정지될 수 있습니다.",
    "<strong>One account per person.</strong>": "한 사람당 하나의 계정.",
    "Using bots, scripts, browser automation, or any exploit to gain an unfair advantage is strictly prohibited.": "봇, 스크립트, 브라우저 자동화 또는 익스플로잇을 이용해 불공정한 이득을 취하는 행위는 엄격히 금지됩니다.",
    "<br>": "<br>",
    "<br><br>": "<br><br>",
    "<strong>virtual machines, residential proxies, multi-accounting browsers, or any automation tool</strong>": "가상 머신, 주거용 프록시, 다중 계정 브라우저 또는 모든 자동화 도구",
    "to gain an unfair advantage is strictly prohibited.": "불공정한 이득을 취하는 행위는 엄격히 금지됩니다.",
    "Painting in Wplace using": "Wplace 칠하기는",
    "is not advised and may lead to": "권장하지 않으며,",
    "<strong>permanent bans</strong>": "영구 정지",
    "<strong>Warning:</strong>": "경고:",
    "sharing a device with family or other people can cause accounts to be flagged as multi-accounting and result in suspension.": "가족이나 다른 사람과 기기를 공유하면 다중 계정으로 감지되어 정지될 수 있습니다.",
    "A correction is already pending for this ticket.": "이미 이 티켓에 대한 정정이 진행 중입니다.",
    "A credit to move the headquarters anchor on the world map.": "월드맵에서 본부 앵커를 이동하기 위한 크레딧입니다.",
    "A description change credit is required": "설명 변경 크레딧이 필요합니다",
    "A member joined": "멤버가 참여했습니다",
    "A member left": "멤버가 떠났습니다",
    "A member's role changed": "멤버의 역할이 변경되었습니다",
    "A punishment cache reload is already running": "처벌 캐시 리로드가 이미 실행 중입니다",
    "A reason is required": "사유가 필요합니다",
    "Accept": "수락",
    "Access applies only to this draft. Collaborators can paint, but cannot finish, equip, spend Coins, or manage access.": "이 초안에만 적용됩니다. 협업자는 칠할 수 있지만 완료, 착용, 코인 사용, 접근 관리는 할 수 없습니다.",
    "Access restored in": "접근이 복구되었습니다",
    "Access through Tor or anonymous networks is not allowed. Please connect from a regular network to continue.": "Tor 또는 익명 네트워크를 통한 접근은 허용되지 않습니다. 일반 네트워크에서 접속해 주세요.",
    "Account successfully deleted": "계정이 성공적으로 삭제되었습니다",
    "Account suspended": "계정이 정지되었습니다",
    "Actions that alter or disrupt artwork but may have <strong>multiple valid interpretations</strong>, such as territorial expansion, cleanup, or style changes. <strong>These are not automatically griefing</strong>. However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.": "작품을 변경하거나 방해하지만 <strong>여러 유효한 해석이 가능한</strong> 행위. 예를 들어 영역 확장, 정리, 스타일 변경 등. <strong>이러한 행위가 무조건 그리핑으로 간주되지 않습니다</strong>. 그러나 행동이 지속적으로 과도해지거나, 특정 대상을 겨냥하거나, 명백하게 방해가 되는 경우 운영자가 개입할 수 있습니다.",
    "<strong>multiple valid interpretations</strong>": "여러 유효한 해석이 가능한",
    "Actions that alter or disrupt artwork but may have": "작품을 변경하거나 방해하지만",
    "such as territorial expansion, cleanup, or style changes.": "예를 들어 영역 확장, 정리, 스타일 변경 등.",
    "<strong>These are not automatically griefing</strong>": "이러한 행위가 무조건 그리핑으로 간주되지 않습니다",
    "However, if the behavior becomes excessive, targeted, or clearly disruptive over time, moderators may intervene.": "그러나 행동이 지속적으로 과도해지거나, 특정 대상을 겨냥하거나, 명백하게 방해가 되는 경우 운영자가 개입할 수 있습니다.",
    "behavior becomes excessive, targeted, or clearly disruptive over time": "행동이 지속적으로 과도해지거나, 특정 대상을 겨냥하거나, 명백하게 방해가 되는 경우",
    "moderators may intervene": "운영자가 개입할 수 있습니다",
    "Active": "활성",
    "Active Community": "활성 커뮤니티",
    "Active punishments": "활성 처벌",
    "Activity": "활동",
    "Add a description": "설명 추가",
    "Add an image to overlay on the map, or import a .wplace file.": "지도에 오버레이 이미지를 추가하거나 .wplace 파일을 가져오세요.",
    "Add Image": "이미지 추가",
    "Add overlay": "오버레이 추가",
    "Add vertices, then click the first one to fill the polygon.": "꼭짓점을 추가한 뒤, 첫 번째 꼭짓점을 클릭하여 다각형을 채우세요.",
    "Admin": "관리자",
    "Administrator": "관리자",
    "Admins": "관리자",
    "Advanced Paint Tools": "고급 칠하기 도구",
    "Afghanistan": "아프가니스탄",
    "Albania": "알바니아",
    "Algeria": "알제리",
    "All badges earned": "모든 배지 획득",
    "All changes saved": "모든 변경 사항 저장됨",
    "All colors": "모든 색상",
    "All Frames": "모든 프레임",
    "All Hands on Deck": "전원 참여",
    "All join policies": "모든 가입 정책",
    "All members": "모든 멤버",
    "All roles": "모든 역할",
    "All selected groups and people are combined. Draft collaborators also see overlays placed on their draft.": "선택한 모든 그룹과 사람이 결합됩니다. 초안 협업자도 자신의 초안에 배치된 오버레이를 볼 수 있습니다.",
    "All time": "전체",
    "Alliance": "연합",
    "Alliance activity": "연합 활동",
    "Alliance archived": "연합 보관됨",
    "Alliance asset studio": "연합 에셋 스튜디오",
    "Alliance created": "연합 생성됨",
    "Alliance details could not be loaded": "연합 상세 정보를 불러올 수 없습니다",
    "Alliance HQ pins": "연합 본부 핀",
    "Alliance lifecycle": "연합 생명주기",
    "Alliance Mobilized": "연합 동원됨",
    "Alliance Name": "연합 이름",
    "Alliance name": "연합 이름",
    "Alliance name already taken": "연합 이름이 이미 사용 중입니다",
    "Alliance name exceeded the maximum number of characters": "연합 이름이 최대 글자 수를 초과했습니다",
    "Alliance name reported successfully": "연합 이름이 성공적으로 보고되었습니다",
    "Alliance not found": "연합을 찾을 수 없습니다",
    "Alliance notifications": "연합 알림",
    "Alliance overlays": "연합 오버레이",
    "Alliance overlays updated": "연합 오버레이 업데이트됨",
    "Alliance overlays use positions set by alliance staff.": "연합 오버레이 위치는 연합 스태프가 설정합니다.",
    "Alliance permission": "연합 권한",
    "Alliance purchase": "연합 구매",
    "Alliance purchase completed": "연합 구매 완료",
    "Alliance renamed": "연합 이름 변경됨",
    "Alliance restored": "연합 복구됨",
    "Alliance settings": "연합 설정",
    "Alliance store": "연합 상점",
    "Alliance updated": "연합 업데이트됨",
    "Alliance with empty name": "이름이 비어 있는 연합",
    "Alliances": "연합",
    "Allowed": "허용됨",
    "allowed": "허용됨",
    "Allowed by Event or Special Rules": "이벤트 또는 특별 규칙에 의해 허용됨",
    "Already Handled": "이미 처리됨",
    "Always remember to follow our code of conduct.": "항상 행동 강령을 준수해 주세요.",
    "American Samoa": "아메리칸사모아",
    "Ancient Order": "고대 질서",
    "and": "그리고",
    "and counting…": "그리고 계속 증가 중…",
    "and move your cursor over the map.": "그리고 지도 위에 커서를 올려놓으세요.",
    "Andorra": "안도라",
    "Angola": "앙골라",
    "Anguilla": "앵귈라",
    "Antarctica": "남극",
    "Antigua and Barbuda": "앤티가 바부다",
    "Any": "모두",
    "Anything owned by both accounts is refunded in its purchase currency": "두 계정이 모두 보유한 항목은 구매 통화로 환불됩니다",
    "Appeal": "이의신청",
    "Appeal feedback": "이의신청 피드백",
    "Appeal sent successfully": "이의신청이 성공적으로 전송되었습니다",
    "Appeal submitted": "이의신청 제출됨",
    "Appeals": "이의신청",
    "Apply Revert": "되돌리기 적용",
    "Applying will restore the selected pixels to this snapshot.": "적용하면 선택한 픽셀이 이 스냅샷으로 복원됩니다.",
    "Are you absolutely sure?": "정말 확실합니까?",
    "Argentina": "아르헨티나",
    "Armenia": "아르메니아",
    "Art opacity": "그림 투명도",
    "Artwork removal": "작품 삭제",
    "Aruba": "아루바",
    "Asset unlocked and first draft created": "에셋 잠금 해제 및 첫 초안 생성됨",
    "Audit Logs": "감사 로그",
    "Australia": "호주",
    "Austria": "오스트리아",
    "Auto-paint": "자동 칠하기",
    "Auto-paint completed successfully.": "자동 칠하기가 성공적으로 완료되었습니다.",
    "Awarded to every player on the winning side.": "승리 편의 모든 플레이어에게 수여됩니다.",
    "Awards": "수상",
    "Azerbaijan": "아제르바이잔",
    "Back": "뒤로",
    "Back to gallery": "갤러리로 돌아가기",
    "Back to list": "목록으로 돌아가기",
    "Back to the tile": "타일로 돌아가기",
    "Background color": "배경색",
    "Badge equipped!": "배지 착용됨!",
    "Badge Inventory": "배지 인벤토리",
    "Badges": "배지",
    "Bahamas": "바하마",
    "Bahrain": "바레인",
    "Balance": "잔액",
    "Balance migration": "잔액 마이그레이션",
    "Ban": "차단",
    "Ban appeal": "차단 이의신청",
    "Ban from alliance": "연합에서 차단",
    "Ban User": "사용자 차단",
    "Bangladesh": "방글라데시",
    "Banned": "차단됨",
    "Banned from alliance": "연합에서 차단됨",
    "Banner draft": "배너 초안",
    "Barbados": "바베이도스",
    "Beige": "베이지",
    "Belarus": "벨라루스",
    "Belgium": "벨기에",
    "Belize": "벨리즈",
    "Benin": "베냉",
    "Bermuda": "버뮤다",
    "Better Description": "고급 설명",
    "Better Pallet": "고급 팔레트",
    "Bhutan": "부탄",
    "Black": "검정",
    "Blank": "빈 항목",
    "Blocked": "차단됨",
    "Blue": "파랑",
    "Bold": "굵게",
    "Bolivia": "볼리비아",
    "Bonaire": "보네르",
    "bonus": "보너스",
    "Bosnia and Herzegovina": "보스니아 헤르체고비나",
    "Botswana": "보츠와나",
    "Botting": "봇 사용",
    "Bouvet Island": "부베 섬",
    "Brazil": "브라질",
    "Breaking the rules": "규칙 위반",
    "British Indian Ocean Territory": "영국령 인도양 지역",
    "Brown": "갈색",
    "Browse real paint moments and restore the exact historical state.": "실제 칠하기 순간을 살펴보고 정확한 과거 상태로 복원하세요.",
    "Brunei Darussalam": "브루나이",
    "Brush size": "브러시 크기",
    "Bug report": "버그 보고",
    "Bulgaria": "불가리아",
    "Bulleted list": "글머리 기호 목록",
    "Burkina Faso": "부르키나파소",
    "Burundi": "부룬디",
    "Buy a draft": "초안 구매",
    "Buy the previous overlay space upgrade first.": "이전 오버레이 공간 업그레이드를 먼저 구매하세요.",
    "By continuing, you agree to our": "계속하면 다음에 동의하는 것입니다:",
    "By request": "요청에 의한",
    "Cabo Verde": "카보베르데",
    "Cambodia": "캄보디아",
    "Cameroon": "카메룬",
    "Can't reach the server. Maybe you are without internet connection or the server is down. Try again later": "서버에 연결할 수 없습니다. 인터넷 연결이 없거나 서버가 다운되었을 수 있습니다. 나중에 다시 시도해 주세요",
    "Canada": "캐나다",
    "Canary Islands": "카나리아 제도",
    "Cancel": "취소",
    "Cancel request": "요청 취소",
    "Cannot report while banned": "차단 중에는 신고할 수 없습니다",
    "Canvas and profile art": "캔버스 및 프로필 아트",
    "Canvas Giant": "캔버스 자이언트",
    "Canvas God": "캔버스 갓",
    "Canvas size": "캔버스 크기",
    "Canvas Titan": "캔버스 타이탄",
    "Card": "카드",
    "Cases of clear griefing (such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are <strong>subject to moderation intervention</strong>.": "명백한 그리핑 사례(작품에 창의적 의도 없이 낙서하거나, 무작위 픽셀을 배치하여 의도적으로 방해하는 경우 등)는 <strong>운영 개입 대상</strong>입니다.",
    "<strong>subject to moderation intervention</strong>": "운영 개입 대상",
    "are <strong>subject to moderation intervention</strong>": "는 운영 개입 대상입니다.",
    "Cases of clear griefing": "명백한 그리핑 사례",
    "(such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels)": "(작품에 창의적 의도 없이 낙서하거나, 무작위 픽셀을 배치하여 의도적으로 방해하는 경우 등)",
    "(such as scribbling over someone's artwork with no creative intent, or deliberately disrupting it by placing random pixels) are": "(작품에 창의적 의도 없이 낙서하거나, 무작위 픽셀을 배치하여 의도적으로 방해하는 경우 등은)",
    "Caused by a Glitch": "글리치로 인한 것",
    "Cayman Islands": "케이맨 제도",
    "Center": "가운데",
    "Center dot": "중앙 점",
    "Central African Republic": "중앙아프리카 공화국",
    "Chad": "차드",
    "Challenge verification not completed": "챌린지 인증이 완료되지 않았습니다",
    "Change Headquarters": "본부 변경",
    "Change language": "언어 변경",
    "Charges declined by Google or your bank are listed here.": "Google 또는 은행에서 거절한 충전이 여기에 표시됩니다.",
    "Chile": "칠레",
    "China": "중국",
    "Choose a badge for this slot": "이 슬롯에 배지를 선택하세요",
    "Choose a flag for your profile. Open the store to select it!": "프로필 깃발을 선택하세요. 상점에서 선택하세요!",
    "Choose a new name of up to 16 characters. The old name is released immediately.": "최대 16자의 새 이름을 선택하세요. 이전 이름은 즉시 해제됩니다.",
    "Choose a valid image up to 8 MB.": "최대 8MB의 유효한 이미지를 선택하세요.",
    "Choose location on map": "지도에서 위치 선택",
    "Choose the headquarters location on the map first": "먼저 지도에서 본부 위치를 선택하세요",
    "Choose the moment you want to restore.": "복원할 시점을 선택하세요.",
    "Choose up to 3 earned awards for the public profile": "공개 프로필에 표시할 획득 상 최대 3개를 선택하세요",
    "Choose what each role can do. The leader always keeps every permission.": "각 역할이 할 수 있는 것을 설정하세요. 리더는 항상 모든 권한을 보유합니다.",
    "Choose which alliance activity notifies you. Personal notifications always arrive": "알림을 받을 연합 활동을 선택하세요. 개인 알림은 항상 수신됩니다",
    "Choose your account": "계정을 선택하세요",
    "Choose your side": "편을 선택하세요",
    "Christmas Island": "크리스마스섬",
    "CIEDE2000": "CIEDE2000",
    "Circle brush": "원형 브러시",
    "Clear": "지우기",
    "Clear filtered": "필터 해제",
    "Clear filters": "모든 필터 해제",
    "Clear griefing": "그리핑 제거",
    "Clear hate speech, extreme slurs, or symbols of hate (e.g. swastikas)": "혐오 발언, 극단적 비속어 또는 혐오 상징(예: 나치 상징) 제거",
    "Clears those areas using palette color 0.": "팔레트 색상 0을 사용하여 해당 영역을 지웁니다.",
    "Click": "클릭",
    "Click the map near the overlay's destination, then confirm. You can position it precisely on the canvas.": "오버레이 대상 지점 근처를 클릭한 후 확인하세요. 캔버스에서 정확하게 위치를 지정할 수 있습니다.",
    "Click to reveal": "클릭하여 표시",
    "Close": "닫기",
    "closed": "닫힘",
    "Cocos (Keeling) Islands": "코코스(키링) 제도",
    "Coin ledger": "코인 장부",
    "Coin purchases and unlocks": "코인 구매 및 잠금 해제",
    "Coins": "코인",
    "Collaborators will lose access to this draft. This cannot be undone.": "협업자가 이 초안에 대한 접근 권한을 잃게 됩니다. 되돌릴 수 없습니다.",
    "Collapse palette": "팔레트 접기",
    "Colombia": "콜롬비아",
    "Color Mode": "색상 모드",
    "Color palette": "색상 팔레트",
    "Color Picker": "스포이드",
    "Colors": "색상",
    "Colors or Void. Your choice is permanent.": "색상 또는 보이드. 선택은 되돌릴 수 없습니다.",
    "Colors vs Void": "색상 대 보이드",
    "Common": "일반",
    "Community Guidelines": "커뮤니티 가이드라인",
    "Comoros": "코모로",
    "Compare the selected pixels by how many edits back each one goes.": "선택한 픽셀의 편집 깊이를 비교합니다.",
    "Competing for space is part of the game.": "공간 경쟁은 게임의 일부입니다.",
    "Confirm": "확인",
    "Confirm donation": "기부 확인",
    "Congo": "콩고",
    "Connect Google Drive": "Google Drive 연결",
    "Connected to Google Drive": "Google Drive에 연결됨",
    "Conqueror badge": "정복자 배지",
    "Conquerors": "정복자",
    "Continue": "계속",
    "Continue painting": "칠하기 계속",
    "Convert to legacy colors": "기존 색상으로 변환",
    "Cook Islands": "쿡 제도",
    "Coordinates": "좌표",
    "Copied": "복사됨",
    "Copy": "복사",
    "Copy collaborators from another open draft": "다른 열린 초안에서 협업자 복사",
    "Copy link": "링크 복사",
    "Costa Rica": "코스타리카",
    "Could not load the headquarters leaderboard": "본부 리더보드를 불러올 수 없습니다",
    "Could not logout. Try refreshing the page.": "로그아웃할 수 없습니다. 페이지를 새로고침해 보세요.",
    "Couldn't add overlay. Try a different image file.": "오버레이를 추가할 수 없습니다. 다른 이미지 파일을 시도해 보세요.",
    "Couldn't complete the purchase. This item does not exist.": "구매를 완료할 수 없습니다. 이 항목이 존재하지 않습니다.",
    "Couldn't import overlay. The file may be corrupted or in the wrong format.": "오버레이를 가져올 수 없습니다. 파일이 손상되었거나 잘못된 형식일 수 있습니다.",
    "Countries": "국가",
    "Country": "국가",
    "Create a collaborative canvas for your alliance, anchored to a spot on the world map. Members paint it together using a dedicated charge pool.": "월드맵의 지점에 고정된 연합 전용 협업 캔버스를 만드세요. 멤버들이 전용 충전 풀을 사용하여 함께 칠합니다.",
    "Create alliance": "연합 만들기",
    "Create an alliance": "연합 만들기",
    "Create invitations": "초대장 만들기",
    "Create invite": "초대 만들기",
    "Create, paint, and equip your alliance identity": "연합 아이덴티티를 만들고, 칠하고, 착용하세요",
    "Created": "생성됨",
    "Croatia": "크로아티아",
    "Cuba": "쿠바",
    "Curaçao": "퀴라소",
    "Current asset unequipped": "현재 에셋 탈착됨",
    "Current Picture": "현재 그림",
    "Cyan": "청록",
    "Cyprus": "키프로스",
    "Czechia": "체코",
    "Côte d'Ivoire": "코트디부아르",
    "Dark Beige": "짙은 베이지",
    "Dark Blue": "짙은 파랑",
    "Dark Brown": "짙은 갈색",
    "Dark Cyan": "짙은 청록",
    "Dark Goldenrod": "짙은 골든로드",
    "Dark Gray": "짙은 회색",
    "Dark Green": "짙은 초록",
    "Dark Indigo": "짙은 남색",
    "Dark mode": "다크 모드",
    "Dark Olive": "짙은 올리브",
    "Dark Orange": "짙은 주황",
    "Dark Peach": "짙은 복숭아색",
    "Dark Pink": "짙은 분홍",
    "Dark Purple": "짙은 보라",
    "Dark Red": "짙은 빨강",
    "Dark Slate": "짙은 슬레이트",
    "Dark Slate Blue": "짙은 슬레이트 블루",
    "Dark Stone": "짙은 돌색",
    "Dark Tan": "짙은 황갈색",
    "Dark Teal": "짙은 청록",
    "Dashboard": "대시보드",
    "days": "일",
    "Decide later": "나중에 결정",
    "Decide later?": "나중에 결정하시겠습니까?",
    "Declined": "거절됨",
    "Dedicated Artists": "전문 아티스트",
    "Deep Red": "진한 빨강",
    "Default": "기본값",
    "Defeat": "패배",
    "Delete": "삭제",
    "Delete Account": "계정 삭제",
    "Delete overlay?": "오버레이를 삭제하시겠습니까?",
    "Delete this saved version?": "이 저장된 버전을 삭제하시겠습니까?",
    "Deleted": "삭제됨",
    "Denmark": "덴마크",
    "Depth": "깊이",
    "Description": "설명",
    "Description change credit": "설명 변경 크레딧",
    "Description updated": "설명 업데이트됨",
    "Destroying others' work with no creative intent.": "창의적 의도 없이 타인의 작품을 파괴하는 행위.",
    "Developer": "개발자",
    "Diagonal half": "대각선 절반",
    "Disable browser extensions that block scripts or fingerprinting (ad blockers, privacy shields), then reload.": "스크립트나 핑거프린팅을 차단하는 브라우저 확장 프로그램(광고 차단기, 개인정보 보호 등)을 비활성화한 후 새로고침하세요.",
    "Discard": "버리기",
    "Disconnect": "연결 해제",
    "Disconnect Google Drive?": "Google Drive 연결을 해제하시겠습니까?",
    "Disconnected from Google Drive.": "Google Drive 연결이 해제되었습니다.",
    "Disconnected on this device, but the server could not revoke Google Drive access. Try again later.": "이 기기에서 연결이 해제되었지만 서버에서 Google Drive 접근 권한을 취소하지 못했습니다. 나중에 다시 시도해 주세요.",
    "Discord": "Discord",
    "Discord invite": "Discord 초대",
    "Discord invite removed": "Discord 초대 삭제됨",
    "Discord invite updated": "Discord 초대 업데이트됨",
    "Discord Leaders": "Discord 리더",
    "Discord linked": "Discord 연결됨",
    "Discord Moderator": "Discord 운영자",
    "Discord server invite": "Discord 서버 초대",
    "Discord unlinked": "Discord 연결 해제됨",
    "Display your country’s flag next to your username. Plus, when painting in regions where you own the corresponding flag, you recover 10% of the charges spent.": "사용자 이름 옆에 국가 깃발을 표시합니다. 또한 해당 깃발을 소유한 지역에서 칠하면 사용한 충전의 10%를 회복합니다.",
    "Dithering": "디더링",
    "Djibouti": "지부티",
    "Does not need to be equipped to provide the bonus": "보너스를 제공하기 위해 착용할 필요 없음",
    "Dominica": "도미니카",
    "Dominican Republic": "도미니카 공화국",
    "Donate Droplets": "물방울 기부",
    "Donations are final. The Droplets go to the alliance shared balance and are never refunded, not even if you leave the alliance, are removed from it, or the alliance is archived.": "기부는 최종입니다. 물방울은 연합 공유 잔액으로 전달되며, 연합을 떠나거나 삭제되거나 보관되더라도 환불되지 않습니다.",
    "Done": "완료",
    "Download": "다운로드",
    "Download WPlace from the Google Play Store.": "Google Play 스토어에서 WPlace를 다운로드하세요.",
    "Doxxing": "도싱",
    "Doxxing (sharing anyone's private personal information)": "도싱 (타인의 개인정보 공개)",
    "Draft": "초안",
    "Draft access granted": "초안 접근 권한 부여됨",
    "Draft access removed": "초안 접근 권한 제거됨",
    "Draft actions": "초안 작업",
    "Draft collaborators": "초안 협업자",
    "Draft finished and equipped": "초안 완료 및 착용됨",
    "Draft saved as an immutable version": "초안이 불변 버전으로 저장됨",
    "Drafts": "초안",
    "Drag the overlay, then save its shared position.": "오버레이를 드래그한 후 공유 위치를 저장하세요.",
    "Draw New": "새로 그리기",
    "Draw your profile picture": "프로필 그림 그리기",
    "Drawing a flag over other artworks": "다른 작품 위에 깃발 그리기",
    "Drawing a new artwork over a flag": "깃발 위에 새 작품 그리기",
    "Drawing in this category <strong>shouldn't lead to suspensions</strong>. However, <strong>the community is free clean up or paint over these artworks</strong>. Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).": "이 범주의 그림은 <strong>정지로 이어지지 않아야 합니다</strong>. 그러나 <strong>커뮤니티는 자유롭게 이 작품들을 정리하거나 덧칠할 수 있습니다</strong>. 성적 함의가 있지만 노골적인 영역(생식기, 성행위, 체액)에 도달하지 않는 그림이 포함됩니다.",
    "<strong>shouldn't lead to suspensions</strong>": "정지로 이어지지 않아야 합니다",
    "Drawing in this category": "이 범주의 그림은",
    "However, <strong>the community is free clean up or paint over these artworks</strong>.": "그러나 커뮤니티는 자유롭게 이 작품들을 정리하거나 덧칠할 수 있습니다.",
    "<strong>the community is free clean up or paint over these artworks</strong>": "커뮤니티는 자유롭게 이 작품들을 정리하거나 덧칠할 수 있습니다",
    "Includes drawings with sexual undertones that don't cross into explicit territory (no genitalia, sexual acts, or sexual fluids).": "성적 함의가 있지만 노골적인 영역(생식기, 성행위, 체액)에 도달하지 않는 그림이 포함됩니다.",
    "Drawing over a repeated pattern": "반복 패턴 위에 그리기",
    "Drawing over another drawing": "다른 그림 위에 그리기",
    "Drawing over existing artwork with no creative intent": "창의적 의도 없이 기존 작품 위에 그리기",
    "Drawing repeated pattern over other artworks": "다른 작품 위에 반복 패턴 그리기",
    "Droplet donation": "물방울 기부",
    "Droplets": "물방울",
    "Droplets to donate": "기부할 물방울",
    "Droplets you will receive": "받게 될 물방울",
    "Duration": "기간",
    "e.g. 10": "예: 10",
    "Each pixel uses one headquarters charge. Charges refill over time.": "픽셀당 본부 충전 1개를 사용합니다. 충전은 시간이 지남에 따라 자동 충전됩니다.",
    "Earn 1 point for every pixel you paint, plus 1 extra point for every 30 minutes it stays alive.": "칠한 픽셀당 1포인트, 30분간 생존 시 추가 1포인트를 획득합니다.",
    "Ecuador": "에콰도르",
    "Edit": "편집",
    "Edit alliance profile": "연합 프로필 편집",
    "Edit description": "설명 편집",
    "Edit overlay": "오버레이 편집",
    "Edit profile": "프로필 편집",
    "Egypt": "이집트",
    "El Salvador": "엘살바도르",
    "Enduring Alliance": "인내의 연합",
    "Enter a different alliance name": "다른 연합 이름을 입력하세요",
    "Enter a positive multiple of the conversion rate": "환율의 양의 배수를 입력하세요",
    "Enter a valid discord.gg or discord.com/invite link": "유효한 discord.gg 또는 discord.com/invite 링크를 입력하세요",
    "Enter a valid email address.": "유효한 이메일 주소를 입력하세요.",
    "Enter a valid user ID": "유효한 사용자 ID를 입력하세요",
    "Epic": "에픽",
    "Equatorial Guinea": "적도 기니",
    "Equip": "착용",
    "Equip badge": "배지 착용",
    "Equipped": "착용됨",
    "Equipped slots:": "착용된 슬롯:",
    "Eraser": "지우개",
    "Erasing spam, inappropriate or suggestive content with transparent pixels.": "투명 픽셀을 사용하여 스팸, 부적절하거나 암시적인 콘텐츠를 지우기.",
    "Eritrea": "에리트레아",
    "Error equipping badge. Try again later.": "배지 착용 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
    "Error loading": "로딩 오류",
    "Error revoking sessions. Try again later.": "세션 취소 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.",
    "Estonia": "에스토니아",
    "Eswatini": "에스와티니",
    "Ethiopia": "에티오피아",
    "Event Notification": "이벤트 알림",
    "Event tiles": "이벤트 타일",
    "Events": "이벤트",
    "Every day, at 23:59 UTC": "매일 UTC 23:59",
    "Everything Alliance Coins buy, in one place": "연합 코인으로 구매 가능한 모든 것, 한 곳에서",
    "Everything below moves to the account you keep:": "아래 항목은 유지할 계정으로 이동됩니다:",
    "Exceeded maximum number of characters": "최대 글자 수를 초과했습니다",
    "Exit full screen": "전체 화면 종료",
    "Expand palette": "팔레트 펼치기",
    "Expired": "만료됨",
    "Expires": "만료",
    "Explicit or illegal content, severe slurs": "노골적이거나 불법 콘텐츠, 심각한 비속어",
    "Explicit sexual content (genitalia, sexual acts, sexual fluids)": "노골적인 성적 콘텐츠 (생식기, 성행위, 체액)",
    "Explicit, hateful, or illegal content is not tolerated.": "노골적이거나 혐오적, 불법 콘텐츠는 허용되지 않습니다.",
    "Explore alliances": "연합 둘러보기",
    "Export": "내보내기",
    "Extra context on what happened (required)": "발생한 일에 대한 추가 맥락 (필수)",
    "Extra max. charges": "추가 최대 충전",
    "Extreme graphic gore or realistic violence": "극도의 잔혹하거나 사실적인 폭력",
    "Extreme hostility or targeted harassment toward others": "타인에 대한 극도의 적대감 또는 표적 괴롭힘",
    "Failed to load image as template": "템플릿으로 이미지를 불러오지 못했습니다",
    "Failed to load image.": "이미지를 불러오지 못했습니다.",
    "Failed to load WebAssembly module. Try to use another browser.": "WebAssembly 모듈을 불러오지 못했습니다. 다른 브라우저를 사용해 보세요.",
    "Fair play": "공정한 플레이",
    "Falkland Islands (Malvinas)": "포클랜드 제도 (마르비나스)",
    "Faroe Islands": "페로 제도",
    "Favorite locations": "즐겨찾기 위치",
    "Feature awards": "특집 수상",
    "Featured awards cleared": "특집 수상 삭제됨",
    "Featured awards saved": "특집 수상 저장됨",
    "Featured awards updated": "특집 수상 업데이트됨",
    "Fiji": "피지",
    "Filled polygon": "채워진 다각형",
    "Filter": "필터",
    "Final rewards": "최종 보상",
    "Final · px points": "최종 · px 포인트",
    "Finish": "완료",
    "Finish a draft to create your first saved version": "초안을 완료하여 첫 저장 버전을 만드세요",
    "Finish and equip": "완료 후 착용",
    "Finish this draft?": "이 초안을 완료하시겠습니까?",
    "Finland": "핀란드",
    "First Gathering": "첫 번째 모임",
    "Fit to view": "보기에 맞추기",
    "Fixed colors enabled": "고정 색상 활성화됨",
    "Flags": "깃발",
    "Flip": "뒤집기",
    "Flip horizontally": "가로 뒤집기",
    "Flip vertically": "세로 뒤집기",
    "Follow the instructions to enable hardware acceleration": "하드웨어 가속을 활성화하려면 안내를 따르세요",
    "Fonts": "글꼴",
    "For more details, see our": "자세한 내용은 다음을 참조하세요:",
    "For refund requests and processing details, please see our": "환불 요청 및 처리 세부사항은 다음을 참조하세요:",
    "Founding cost": "창립 비용",
    "FPS": "FPS",
    "Frame equipped!": "프레임 착용됨!",
    "Frames": "프레임",
    "Frames store": "프레임 상점",
    "France": "프랑스",
    "Free": "무료",
    "Free colors": "무료 색상",
    "French Guiana": "프랑스령 기아나",
    "French Polynesia": "프랑스령 폴리네시아",
    "French Southern Territories": "프랑스령 남방 및 남극 지역",
    "From your other account": "다른 계정에서",
    "Full House": "만석",
    "Full pixel": "전체 픽셀",
    "Gabon": "가봉",
    "Gambia": "감비아",
    "Game Master": "게임 마스터",
    "Game Master Leader": "게임 마스터 리더",
    "Generating area timelapse...": "지역 타임랩스 생성 중...",
    "Georgia": "조지아",
    "Germany": "독일",
    "Get help on Discord": "Discord에서 도움 받기",
    "Get more charges": "충전 더 받기",
    "Get special rewards": "특별 보상 받기",
    "Ghana": "가나",
    "Gibraltar": "지브롤터",
    "Go to canvas": "캔버스로 이동",
    "Go to store": "상점으로 이동",
    "Goes to the top scorer when the tile closes.": "타일이 닫힐 때 최고 득점자에게 돌아갑니다.",
    "Gold": "금색",
    "Goldenrod": "골든로드",
    "Google denied the sign-in. If you did not cancel it, this Google account may not be allowed to sign in.": "Google이 로그인을 거부했습니다. 로그인을 취소하지 않았다면, 이 Google 계정은 로그인이 허용되지 않을 수 있습니다.",
    "Google Play": "Google Play",
    "Got it": "알겠습니다",
    "Grand Coalition": "대동맹",
    "Gray": "회색",
    "Gray area": "회색 영역",
    "Greece": "그리스",
    "Green": "초록",
    "Greenland": "그린란드",
    "Grenada": "그레나다",
    "Griefing": "그리핑",
    "Griefing means taking actions on the map <strong>solely to harass or frustrate</strong> other players, with no creative, strategic, or corrective purpose.": "그리핑이란 창의적, 전략적 또는 개선 목적이 없이 다른 플레이어를 <strong>괴롭히거나 좌절시키기 위해</strong> 지도에서 행위를 취하는 것을 의미합니다.",
    "<strong>solely to harass or frustrate</strong>": "괴롭히거나 좌절시키기 위해",
    "taking actions on the map": "지도에서 행위를 취하는",
    "other players, with no creative, strategic, or corrective purpose.": "다른 플레이어를 대상으로 창의적, 전략적 또는 개선 목적이 없이.",
    "Growing Community": "성장하는 커뮤니티",
    "Guadeloupe": "과들루프",
    "Guam": "괌",
    "Guatemala": "과테말라",
    "Guernsey": "건지",
    "Guinea": "기니",
    "Guinea-Bissau": "기니비사우",
    "Guyana": "가이아나",
    "Haiti": "아이티",
    "Hang tight — we're confirming your payment. This usually takes just a few seconds.": "잠시만 기다려주세요 — 결제를 확인 중입니다. 보통 몇 초 정도 소요됩니다.",
    "Hate speech": "혐오 발언",
    "Have 10 members each place 10,000 alliance pixels": "멤버 10명이 각각 연합 픽셀 10,000개를 칠하기",
    "Have 10 members paint in one UTC day": "하루 UTC에 멤버 10명이 칠하기",
    "Have 100 members paint in one UTC day": "하루 UTC에 멤버 100명이 칠하기",
    "Have 25 members paint in one UTC day": "하루 UTC에 멤버 25명이 칠하기",
    "Have 50 members paint in one UTC day": "하루 UTC에 멤버 50명이 칠하기",
    "Have a Wplace Twitch account?": "Wplace Twitch 계정이 있으신가요?",
    "Have at least one member paint each day for 7 days": "7일 동안 매일 최소 1명의 멤버가 칠하기",
    "Headquarters": "본부",
    "Headquarters access restored": "본부 접근 권한 복구됨",
    "Headquarters canvas": "본부 캔버스",
    "Headquarters is now members only": "본부가 이제 멤버 전용입니다",
    "Headquarters is now public": "본부가 이제 공개됩니다",
    "Headquarters leaderboard": "본부 리더보드",
    "Headquarters location": "본부 위치",
    "Headquarters moved": "본부 이동됨",
    "Headquarters sizes must be unlocked in order": "본부 크기는 순서대로 잠금 해제해야 합니다",
    "Headquarters timeout": "본부 타임아웃",
    "Headquarters timeout applied": "본부 타임아웃 적용됨",
    "Headquarters timeout revoked": "본부 타임아웃 취소됨",
    "Headquarters timeouts": "본부 타임아웃",
    "Headquarters unlocked": "본부 잠금 해제됨",
    "Headquarters unlocked!": "본부 잠금 해제됨!",
    "Headquarters upgrades must be unlocked in order": "본부 업그레이드는 순서대로 잠금 해제해야 합니다",
    "Headquarters visibility": "본부 공개 범위",
    "Heard Island and McDonald Islands": "허드 맥도날드 제도",
    "Hide": "숨기기",
    "Hide alliance HQ pins": "연합 본부 핀 숨기기",
    "Hide menu": "메뉴 숨기기",
    "Hide pixel art": "픽셀 아트 숨기기",
    "Hide sensitive content": "민감한 콘텐츠 숨기기",
    "Hide UI": "UI 숨기기",
    "Highest tier reached": "도달한 최고 등급",
    "Highlight selected color": "선택한 색상 강조",
    "Highly Suggestive Content": "매우 암시적인 콘텐츠",
    "Historical": "과거 기록",
    "Hold": "홀드",
    "Home": "홈",
    "Honduras": "온두라스",
    "Hong Kong": "홍콩",
    "Hotspots": "핫스팟",
    "Hotspots (🔥) are the most active painting areas on the map. Check to not appear in them.": "핫스팟(🔥)은 지도에서 가장 활발한 칠하기 영역입니다. 이곳에 표시되지 않으려면 체크하세요.",
    "hours": "시간",
    "How it works": "작동 방식",
    "How new members get in: freely, after review, or only with an invite": "새 멤버 가입 방식: 자유 가입, 심사 후 가입, 초대만 허용",
    "How to paint faster": "더 빠르게 칠하는 방법",
    "HQ": "본부",
    "https://discord.gg/your-server": "https://discord.gg/your-server",
    "Hungary": "헝가리",
    "Iceland": "아이슬란드",
    "If nothing works, try opening Wplace in another browser like Chrome, Edge or Firefox.": "아무것도 작동하지 않으면 Chrome, Edge 또는 Firefox와 같은 다른 브라우저에서 Wplace를 열어보세요.",
    "If you believe a punishment was a mistake, use its appeal button. You can appeal each punishment once.": "처벌이 잘못되었다고 생각되면 이의신청 버튼을 사용하세요. 각 처벌에 대해 한 번만 이의신청할 수 있습니다.",
    "Image": "이미지",
    "Image carousel": "이미지 캐러셀",
    "Image copied to clipboard": "이미지가 클립보드에 복사되었습니다",
    "Import": "가져오기",
    "Inappropriate content": "부적절한 콘텐츠",
    "Included": "포함됨",
    "Increase your maximum paint charges capacity": "최대 칠하기 충전 용량을 늘리세요",
    "Indefinite": "무기한",
    "India": "인도",
    "Indigo": "남색",
    "Indonesia": "인도네시아",
    "Info": "정보",
    "Input the code": "코드를 입력하세요",
    "Instagram": "Instagram",
    "Install App": "앱 설치",
    "Insufficient Context": "맥락 부족",
    "Invalid captcha. Please try again.": "잘못된 캡차입니다. 다시 시도해 주세요.",
    "Invalid challenge response": "잘못된 챌린지 응답",
    "Invalid discord.": "잘못된 Discord입니다.",
    "Invalid ID": "잘못된 ID",
    "Invalid Information": "잘못된 정보",
    "Invite": "초대",
    "Invite created": "초대 생성됨",
    "Invite link copied": "초대 링크 복사됨",
    "Invite only": "초대만 허용",
    "Invites": "초대",
    "Iran": "이란",
    "Iraq": "이라크",
    "Ireland": "아일랜드",
    "is enabled on": "이(가) 활성화됨",
    "Isle of Man": "맨섬",
    "Israel": "이스라엘",
    "Italic": "기울임꼴",
    "Italy": "이탈리아",
    "Items": "항목",
    "Jamaica": "자메이카",
    "Japan": "일본",
    "Jersey": "저지섬",
    "Join alliance": "연합 가입",
    "Join Discord Server": "Discord 서버 참가",
    "Join our Discord": "Discord에 참가하기",
    "Join policy": "가입 정책",
    "Join request cancelled": "가입 요청 취소됨",
    "Join request sent": "가입 요청 전송됨",
    "Join requests": "가입 요청",
    "Joined: Newest": "참여일: 최신순",
    "Joined: Oldest": "참여일: 오래된순",
    "Joining is free, but the side that pulls ahead in players closes until the other catches up. You can't switch sides later.": "가입은 무료이지만, 플레이어 수에서 앞서는 편은 상대가 따라잡을 때까지 닫힙니다. 나중에 편을 변경할 수 없습니다.",
    "Jordan": "요르단",
    "Kazakhstan": "카자흐스탄",
    "Keep at least one pixel alive on an event tile.": "이벤트 타일에 최소 1개의 픽셀을 유지하세요.",
    "Keep editing": "편집 계속",
    "Keep this account": "이 계정 유지",
    "Kenya": "케냐",
    "Keyboard shortcuts": "키보드 단축키",
    "Kick from alliance": "연합에서 추방",
    "Kiribati": "키리바시",
    "Kosovo": "코소보",
    "Kuwait": "쿠웨이트",
    "Kyrgyzstan": "키르기스스탄",
    "Laos": "라오스",
    "Largest": "최대",
    "Last painted": "마지막 칠하기",
    "Last pixel": "마지막 픽셀",
    "Last pixel location": "마지막 픽셀 위치",
    "Latest": "최신",
    "Latvia": "라트비아",
    "Leader": "리더",
    "Leader only": "리더만",
    "Leaderboard": "리더보드",
    "Leaderboard is temporarily disabled": "리더보드가 일시적으로 비활성화되었습니다",
    "Leadership changed hands": "리더십이 변경됨",
    "Leadership transferred": "리더십 이전됨",
    "Learn more": "더 알아보기",
    "Leave alliance": "연합 탈퇴",
    "Leave without saving?": "저장하지 않고 떠나시겠습니까?",
    "Leave your current alliance before joining another": "다른 연합에 가입하기 전에 현재 연합을 떠나세요",
    "Lebanon": "레바논",
    "Left after founding": "창립 후 떠남",
    "Legacy colors enabled": "기존 색상 활성화됨",
    "Legendary": "레전더리",
    "Lesotho": "레소토",
    "Level": "레벨",
    "Liberia": "라이베리아",
    "Libya": "리비아",
    "Liechtenstein": "리히텐슈타인",
    "Light Beige": "연한 베이지",
    "Light Blue": "연한 파랑",
    "Light Brown": "연한 갈색",
    "Light Cyan": "밝은 청록",
    "Light Goldenrod": "연한 골든로드",
    "Light Gray": "밝은 회색",
    "Light Green": "연한 초록",
    "Light Indigo": "연한 남색",
    "Light mode": "라이트 모드",
    "Light Peach": "연한 복숭아색",
    "Light Pink": "연한 분홍",
    "Light Purple": "연한 보라",
    "Light Red": "연한 빨강",
    "Light Slate": "연한 슬레이트",
    "Light Slate Blue": "연한 슬레이트 블루",
    "Light Stone": "연한 돌색",
    "Light Tan": "연한 황갈색",
    "Light Teal": "연한 청록",
    "Light Yellow": "연한 노랑",
    "Link your Discord": "Discord 연결",
    "Lithuania": "리투아니아",
    "Live": "실시간",
    "Live · px points": "실시간 · px 포인트",
    "Load more": "더 보기",
    "Loading modification history...": "수정 이력 로딩 중...",
    "Loading...": "로딩 중...",
    "Location favorited": "위치 즐겨찾기에 추가됨",
    "Location name is too big (max. 128 characters)": "위치 이름이 너무 깁니다 (최대 128자)",
    "Location unfavorited": "위치 즐겨찾기에서 제거됨",
    "Lock": "잠금",
    "Lock screen": "화면 잠금",
    "Locked": "잠김",
    "Log in": "로그인",
    "Log in to fight": "전투에 참가하려면 로그인하세요",
    "Log in to place pixels on the shared world map.": "공유 월드맵에 픽셀을 배치하려면 로그인하세요.",
    "Log out from all devices": "모든 기기에서 로그아웃",
    "Logged out": "로그아웃됨",
    "Logout": "로그아웃",
    "Luxembourg": "룩셈부르크",
    "Macao": "마카오",
    "Madagascar": "마다가스카르",
    "Main Canvas": "메인 캔버스",
    "Main-canvas paint progress": "메인 캔버스 칠하기 진행률",
    "Make leader": "리더로 임명",
    "Making a Mark": "자국 남기기",
    "Malawi": "말라위",
    "Malaysia": "말레이시아",
    "Maldives": "몰디브",
    "Mali": "말리",
    "Malta": "몰타",
    "Manage all invitations": "모든 초대 관리",
    "Manage banner": "배너 관리",
    "Manage headquarters": "본부 관리",
    "Manage member roles": "멤버 역할 관리",
    "Manage overlays": "오버레이 관리",
    "Manage picture": "그림 관리",
    "Manage pictures and banners": "그림 및 배너 관리",
    "Manage shared alliance overlays available on every canvas.": "모든 캔버스에서 사용 가능한 공유 연합 오버레이를 관리합니다.",
    "Manage your overlays": "오버레이 관리",
    "Map Cleanup": "지도 정리",
    "Map cleanup": "지도 정리",
    "Map display options": "지도 표시 옵션",
    "Map powered by:": "지도 제공:",
    "Mark all as read": "모두 읽음으로 표시",
    "Markdown help": "마크다운 도움말",
    "Marshall Islands": "마셜 제도",
    "Martinique": "마르티니크",
    "Mauritania": "모리타니",
    "Mauritius": "모리셔스",
    "Max": "최대",
    "Max uses": "최대 사용 횟수",
    "Max. Charges": "최대 충전",
    "Maximum size reached": "최대 크기에 도달했습니다",
    "Mayotte": "마요트",
    "Medium Gray": "중간 회색",
    "Member": "멤버",
    "Member actions": "멤버 작업",
    "Member banned": "멤버 차단됨",
    "Member kicked": "멤버 추방됨",
    "Members": "멤버",
    "Members joining and leaving": "멤버 가입 및 탈퇴",
    "Members only": "멤버 전용",
    "Members only blocks future public access. Artwork that was already public may have been downloaded and cannot be made secret retroactively.": "멤버 전용은 향후 공개 접근을 차단합니다. 이미 공개된 작품은 다운로드되었을 수 있어 소급하여 비공개로 만들 수 없습니다.",
    "Members only see overlays at locations with a set position. Set the missing positions to make them visible.": "멤버는 설정된 위치의 오버레이만 볼 수 있습니다. 표시되도록 누락된 위치를 설정하세요.",
    "Menu": "메뉴",
    "Messed up with other's artworks": "타인의 작품을 훼손",
    "Method": "방법",
    "Mexico": "멕시코",
    "Micronesia": "미크로네시아",
    "Migrate your account": "계정 마이그레이션",
    "Mild Gore Content": "경미한 잔혹 콘텐츠",
    "min": "분",
    "Min": "최소",
    "Mod": "운영자",
    "Moderate lower roles": "하위 역할 관리",
    "Moldova": "몰도바",
    "Monaco": "모나코",
    "Mongolia": "몽골",
    "Montenegro": "몬테네그로",
    "Month": "월",
    "Montserrat": "몬트세랫",
    "More": "더 보기",
    "More options": "추가 옵션",
    "Morocco": "모로코",
    "Move anchor": "앵커 이동",
    "Moving the headquarters requires a Change Headquarters credit": "본부 이동에는 본부 변경 크레딧이 필요합니다",
    "Mozambique": "모잠비크",
    "Multi-accounting": "다중 계정",
    "Multi-accounts & bots": "다중 계정 및 봇",
    "Mute": "음소거",
    "MVP frame": "MVP 프레임",
    "My location": "내 위치",
    "My map is lagging": "내 지도가 렉이 걸려요",
    "Myanmar": "미얀마",
    "Mythic": "신화",
    "Name": "이름",
    "Name and description": "이름 및 설명",
    "Name fonts": "이름 글꼴",
    "Name or ID": "이름 또는 ID",
    "Name reported successfully": "이름이 성공적으로 보고되었습니다",
    "Name styles": "이름 스타일",
    "Namibia": "나미비아",
    "Nauru": "나우루",
    "Nepal": "네팔",
    "Netherlands": "네덜란드",
    "Never": "없음",
    "Never synced": "동기화된 적 없음",
    "New": "새 항목",
    "NEW": "새 항목",
    "New banner draft": "새 배너 초안",
    "New Caledonia": "뉴칼레도니아",
    "New draft created": "새 초안 생성됨",
    "New frame": "새 프레임",
    "New join request": "새 가입 요청",
    "New Overlay": "새 오버레이",
    "New picture draft": "새 그림 초안",
    "New purchases appear here until confirmation.": "구매 확인 전까지 여기에 표시됩니다.",
    "New Zealand": "뉴질랜드",
    "Newest": "최신순",
    "Next": "다음",
    "Next Coin from paints": "칠하기로 획득하는 다음 코인",
    "Next font": "다음 글꼴",
    "Next frame": "다음 프레임",
    "Next image": "다음 이미지",
    "Next style": "다음 스타일",
    "Nicaragua": "니카라과",
    "Niger": "니제르",
    "Nigeria": "나이지리아",
    "Niue": "니우에",
    "No alliance": "연합 없음",
    "No alliance overlays are assigned to this canvas.": "이 캔버스에 배정된 연합 오버레이가 없습니다.",
    "No alliance overlays are available to you yet.": "사용 가능한 연합 오버레이가 아직 없습니다.",
    "No alliances found": "연합을 찾을 수 없습니다",
    "No badge in this slot": "이 슬롯에 배지가 없습니다",
    "No badge selected": "선택된 배지 없음",
    "No banned users": "차단된 사용자 없음",
    "No Coin activity yet": "코인 활동이 아직 없습니다",
    "No corresponding region on the map (cosmetic effect only)": "지도에 해당하는 지역이 없습니다 (장식 효과만 해당)",
    "No country found.": "국가를 찾을 수 없습니다.",
    "No declined attempts": "거절된 시도 없음",
    "No description": "설명 없음",
    "No editable drafts yet": "편집 가능한 초안이 아직 없습니다",
    "No event announcements to display": "표시할 이벤트 공지가 없습니다",
    "No flag": "깃발 없음",
    "No frame": "프레임 없음",
    "No headquarters pixels were painted in this period": "이 기간 동안 본부 픽셀이 칠해지지 않았습니다",
    "No historical changes were found for this selected area.": "선택한 영역에서 과거 변경 사항을 찾을 수 없습니다.",
    "No internet access or the servers are offline. Try again later.": "인터넷에 접근할 수 없거나 서버가 오프라인입니다. 나중에 다시 시도해 주세요.",
    "No invites yet. Create one to bring people in": "아직 초대가 없습니다. 초대를 만들어 사람들을 모으세요",
    "No members match your search": "검색 결과에 일치하는 멤버가 없습니다",
    "No modifications found for the selected pixels.": "선택한 픽셀에 대한 수정 사항을 찾을 수 없습니다.",
    "No more charges": "충전이 더 이상 없습니다",
    "No overlays yet": "아직 오버레이가 없습니다",
    "No pending requests": "대기 중인 요청 없음",
    "No pixels painted": "칠해진 픽셀 없음",
    "No place found": "장소를 찾을 수 없습니다",
    "No players match the current filters.": "현재 필터에 일치하는 플레이어가 없습니다.",
    "No problem. You can reopen this choice anytime from the banner at the top of the map.": "문제 없습니다. 지도 상단의 배너에서 언제든지 이 선택을 다시 열 수 있습니다.",
    "No recent locations": "최근 위치 없음",
    "No refunds": "환불 없음",
    "No Rule Violation": "규칙 위반 없음",
    "No saved versions yet": "저장된 버전이 아직 없습니다",
    "No timeouts yet": "아직 타임아웃이 없습니다",
    "Non-explicit suggestive content": "비노골적 암시적 콘텐츠",
    "None": "없음",
    "Norfolk Island": "노퍽섬",
    "North Korea": "북한",
    "North Macedonia": "북마케도니아",
    "Northern Mariana Islands": "북마리아나 제도",
    "Norway": "노르웨이",
    "Not a valid phone number": "유효한 전화번호가 아닙니다",
    "Not enough Droplets": "물방울이 부족합니다",
    "Not Enough for Punishment": "처벌에 충분하지 않음",
    "Not enough headquarters charges": "본부 충전이 부족합니다",
    "Not enough Prism": "프리즘이 부족합니다",
    "Not found": "찾을 수 없음",
    "Not painted": "칠해지지 않음",
    "Not unlocked yet": "아직 잠금 해제되지 않음",
    "Nothing changed on the canvas": "캔버스에 변경 사항이 없습니다",
    "Nothing counts here until it opens. After that, every pixel you hold earns points.": "열리기 전까지는 여기에 아무것도 카운트되지 않습니다. 그 후에는 보유한 모든 픽셀이 포인트를 획득합니다.",
    "Nothing has happened yet": "아직 아무 일도 일어나지 않았습니다",
    "Nothing pending": "대기 중인 항목 없음",
    "Notifications": "알림",
    "Numbered list": "번호 매긴 목록",
    "of": "/",
    "Offline": "오프라인",
    "Olive": "올리브",
    "Oman": "오만",
    "on the top right corner of the screen. This will lock the screen but it'll also enable painting by moving your finger over the map.": "화면 오른쪽 상단에 있습니다. 화면이 잠기지만, 지도 위에서 손가락을 움직여 칠하기도 가능합니다.",
    "Once approved, your balance will update automatically. You can close this window - your purchase will be credited even if you leave.": "승인되면 잔액이 자동으로 업데이트됩니다. 이 창을 닫아도 됩니다 — 떠나더라도 구매가 처리됩니다.",
    "One account per person. No automation or exploits.": "한 사람당 하나의 계정. 자동화 또는 익스플로잇 금지.",
    "Only PNG, WEBP, and JPG images are supported.": "PNG, WEBP, JPG 이미지만 지원됩니다.",
    "Only the alliance leader can purchase this unlock.": "연합 리더만 이 잠금 해제를 구매할 수 있습니다.",
    "Only the alliance leader can unlock the headquarters.": "연합 리더만 본부를 잠금 해제할 수 있습니다.",
    "Only the leader can paint this draft right now": "현재 리더만 이 초안에 칠할 수 있습니다",
    "Open": "열기",
    "Open banner studio": "배너 스튜디오 열기",
    "Open drafts": "열린 초안",
    "Open full screen": "전체 화면 열기",
    "Open in browser": "브라우저에서 열기",
    "Open picture studio": "그림 스튜디오 열기",
    "Open the studio": "스튜디오 열기",
    "Open your alliance": "내 연합 열기",
    "OpenMapTiles Data from": "OpenMapTiles 데이터 제공:",
    "Operation not allowed. Maybe you have too many favorite locations.": "작업이 허용되지 않습니다. 즐겨찾기 위치가 너무 많을 수 있습니다.",
    "Opt out of hotspots": "핫스팟에서 제외",
    "Optional": "선택사항",
    "or hold": "또는 누르기",
    "Orange": "주황",
    "Original template colors": "원본 템플릿 색상",
    "Other": "기타",
    "Other methods": "기타 방법",
    "Other reason not listed": "목록에 없는 기타 사유",
    "Other rewards": "기타 보상",
    "Out of Scope": "범위 외",
    "Overlay added": "오버레이 추가됨",
    "Overlay deleted": "오버레이 삭제됨",
    "Overlay image not found. Try removing and re-adding it.": "오버레이 이미지를 찾을 수 없습니다. 제거 후 다시 추가해 보세요.",
    "Overlay image restored from your Drive backup.": "Drive 백업에서 오버레이 이미지가 복원되었습니다.",
    "Overlay is too large to render safely.\nLarger overlays can fail to preview, break build mode, or freeze the browser. Reduce its size before continuing.": "오버레이가 너무 커서 안전하게 렌더링할 수 없습니다.\n더 큰 오버레이의 경우 미리보기 실패, 빌드 모드 중단 또는 브라우저 멈춤이 발생할 수 있습니다. 계속하기 전에 크기를 줄여주세요.",
    "Overlay managers only": "오버레이 관리자만",
    "Overlay name": "오버레이 이름",
    "Overlay position saved": "오버레이 위치 저장됨",
    "Overlay saved with protected browser storage.": "보호된 브라우저 저장소에 오버레이가 저장되었습니다.",
    "Overlay saved, but this browser cannot protect local storage from cleanup. Export a backup or connect Google Drive.": "오버레이가 저장되었지만 이 브라우저는 로컬 저장소를 정리로부터 보호할 수 없습니다. 백업을 내보내거나 Google Drive를 연결하세요.",
    "Overlays": "오버레이",
    "Overview": "개요",
    "Owned": "소유",
    "Pace": "속도",
    "Paid": "유료",
    "Paint": "칠하기",
    "Paint bucket": "채우기",
    "Paint Charges": "칠하기 충전",
    "Paint on event area to unlock Conqueror badges": "이벤트 영역에 칠하여 정복자 배지를 잠금 해제하세요",
    "Paint transparent pixels": "투명 픽셀 칠하기",
    "Paint with more than one account": "여러 계정으로 칠하기",
    "Paint with more than one account or using virtual machines, residential proxies, or multi-accounting browsers": "여러 계정이나 가상 머신, 주거용 프록시, 다중 계정 브라우저를 사용하여 칠하기",
    "Painted": "칠해진",
    "Painted pixels, droplets and extra charges": "칠해진 픽셀, 물방울 및 추가 충전",
    "Painting capacity": "칠하기 용량",
    "Painting here is charge-free.": "여기서 칠하는 것은 충전이 무료입니다.",
    "Painting over other players' work is a normal part of the game. If your intent isn't to only harass or deliberately frustrate someone, moderators won't intervene.": "다른 플레이어의 작품 위에 칠하는 것은 게임의 일반적인 부분입니다. 의도적으로 괴롭히거나 좌절시키려는 것이 아니라면 운영자가 개입하지 않습니다.",
    "Pakistan": "파키스탄",
    "Palau": "팔라우",
    "Palestine": "팔레스타인",
    "Panama": "파나마",
    "Papua New Guinea": "파푸아뉴기니",
    "Paraguay": "파라과이",
    "Patch notes": "패치 노트",
    "Payment": "결제",
    "Payment declined": "결제 거절됨",
    "Payment incomplete": "결제 미완료",
    "Payment pending": "결제 대기 중",
    "Payment succeeded": "결제 성공",
    "Payments under verification": "결제 확인 중",
    "Peach": "복숭아색",
    "Pending": "대기 중",
    "Pending total": "대기 합계",
    "Perceptual": "지각적",
    "Perfect Attendance": "전원 출석",
    "Permanent Ban": "영구 정지",
    "permanent ban": "영구 정지",
    "Permanent ban": "영구 정지",
    "Permissions": "권한",
    "Peru": "페루",
    "Philippines": "필리핀",
    "Phone already used": "이미 사용된 전화번호",
    "Phone and Discord links, if the kept account has none": "유지하는 계정에 연결된 것이 없는 경우 전화번호 및 Discord 링크",
    "Phone linked": "전화번호 연결됨",
    "Phone number not supported. Please try another number.": "지원되지 않는 전화번호입니다. 다른 번호를 시도해 주세요.",
    "Phone successfully verified": "전화번호 인증 성공",
    "Phone verification": "전화번호 인증",
    "Pick a color from the map": "지도에서 색상을 선택하세요",
    "Pick a side": "편을 선택하세요",
    "Pick a side to see who is taking this tile.": "이 타일을 차지하고 있는 편을 확인하세요.",
    "Picture draft": "그림 초안",
    "Picture equipped!": "그림 착용됨!",
    "Pictures and banners": "그림 및 배너",
    "Pink": "분홍",
    "Pitcairn": "핏케언",
    "Pixel brush": "픽셀 브러시",
    "Pixel editor": "픽셀 편집기",
    "Pixel grid": "픽셀 격자",
    "Pixel Powerhouse": "픽셀 파워하우스",
    "Pixels": "픽셀",
    "Pixels painted": "칠해진 픽셀",
    "Pixels painted inside the country": "국가 내부에 칠해진 픽셀",
    "Pixels painted inside the region": "지역 내부에 칠해진 픽셀",
    "Pixels painted on all open tiles": "모든 열린 타일에 칠해진 픽셀",
    "Pixels painted on this canvas": "이 캔버스에 칠해진 픽셀",
    "Place 1,000 alliance pixels": "연합 픽셀 1,000개 배치",
    "Place 1,000,000 alliance pixels": "연합 픽셀 1,000,000개 배치",
    "Place 10,000 alliance pixels": "연합 픽셀 10,000개 배치",
    "Place 10,000,000 alliance pixels": "연합 픽셀 10,000,000개 배치",
    "Place 100 alliance pixels": "연합 픽셀 100개 배치",
    "Place 100,000 alliance pixels": "연합 픽셀 100,000개 배치",
    "Plain text. Markdown is available with Better Description.": "일반 텍스트. Better Description으로 마크다운을 사용할 수 있습니다.",
    "Play Billing not supported.": "Play Billing이 지원되지 않습니다.",
    "Player": "플레이어",
    "Players": "플레이어",
    "Please confirm by entering your username:": "사용자 이름을 입력하여 확인해 주세요:",
    "Please enter a valid phone number with country code.": "국가 코드가 포함된 유효한 전화번호를 입력해 주세요.",
    "Poland": "폴란드",
    "Portugal": "포르투갈",
    "Position required": "위치 필수",
    "Preview": "미리보기",
    "Previous": "이전",
    "Previous frame": "이전 프레임",
    "Previous image": "이전 이미지",
    "Previous source": "이전 소스",
    "Previous style": "이전 스타일",
    "Primordial": "태고의",
    "Prism": "프리즘",
    "Prism is the premium currency for exclusive cosmetics. It can only be purchased.": "프리즘은 전용 장식용 프리미엄 화폐입니다. 구매로만 획득할 수 있습니다.",
    "Prism you will receive": "받게 될 프리즘",
    "Privacy": "개인정보처리방침",
    "Privacy Policy": "개인정보처리방침",
    "Prize pool": "상금 풀",
    "Processing payment": "결제 처리 중",
    "Profile": "프로필",
    "Profile banner": "프로필 배너",
    "Profile changes": "프로필 변경",
    "Profile picture": "프로필 그림",
    "Profile pictures": "프로필 그림",
    "Profile pictures and favorite locations": "프로필 그림 및 즐겨찾기 위치",
    "Profile updated": "프로필 업데이트됨",
    "Prohibited": "금지",
    "Protected storage was not granted; some browsers decide this without showing a prompt. Your overlay is saved locally but may be cleared under storage pressure. Use Google Drive cloud sync to keep a backup.": "보관소 접근 권한이 부여되지 않았습니다. 일부 브라우저는 알림 없이 이를 결정합니다. 오버레이가 로컬에 저장되지만 저장 공간 부족 시 삭제될 수 있습니다. 백업을 위해 Google Drive 클라우드 동기화를 사용하세요.",
    "Public": "공개",
    "Publish one changed alliance description.": "변경된 연합 설명 1개를 게시합니다.",
    "Puerto Rico": "푸에르토리코",
    "Punishment": "처벌",
    "Purchase complete": "구매 완료",
    "Purchase history": "구매 내역",
    "Purchase History": "구매 내역",
    "Purchased": "구매됨",
    "Purchased colors, flags, borders, name styles, fonts and badges": "구매한 색상, 깃발, 테두리, 이름 스타일, 글꼴 및 배지",
    "Purchases": "구매",
    "Purchases unavailable": "구매 불가",
    "Purple": "보라",
    "Qatar": "카타르",
    "Racism, homophobia, hate symbols, etc": "인종차별, 동성애 혐오, 혐오 상징 등",
    "Raises the maximum headquarters charges each member can store.": "각 멤버가 보유할 수 있는 최대 본부 충전량을 늘립니다.",
    "Rallying Crowd": "집결하는 군중",
    "Random place": "랜덤 장소",
    "Rank always wins: lower roles cannot manage, remove, ban, or timeout equal or higher roles.": "계급이 우선: 하위 역할은 동등하거나 상위 역할을 관리, 추방, 차단 또는 타임아웃할 수 없습니다.",
    "Rare": "레어",
    "Reach 1,000 eligible members": "자격을 갖춘 멤버 1,000명 달성",
    "Reach 100 eligible members": "자격을 갖춘 멤버 100명 달성",
    "Reach 25 eligible members": "자격을 갖춘 멤버 25명 달성",
    "Reach 5 eligible members": "자격을 갖춘 멤버 5명 달성",
    "Reach 50 eligible members": "자격을 갖춘 멤버 50명 달성",
    "Reach 500 eligible members": "자격을 갖춘 멤버 500명 달성",
    "Real time": "실시간",
    "Reason": "사유",
    "Reason (required)": "사유 (필수)",
    "Recent": "최근",
    "Recently active": "최근 활동",
    "Recharge paint charges": "칠하기 충전 충전",
    "Red": "빨강",
    "Reddit": "Reddit",
    "Redo": "다시 실행",
    "Reduces the time each member waits for one headquarters charge.": "각 멤버가 본부 충전 1개를 대기하는 시간을 줄입니다.",
    "Refresh": "새로고침",
    "Refresh your page to get the latest update": "최신 업데이트를 받으려면 페이지를 새로고침하세요",
    "Refund": "환불",
    "Refund Policy": "환불 정책",
    "Refunded for duplicate items": "중복 항목 환불됨",
    "Refunds": "환불",
    "Refunds approved by Google appear here automatically.": "Google이 승인한 환불은 여기에 자동으로 표시됩니다.",
    "Region": "지역",
    "Regions": "지역",
    "Reject": "거절",
    "Released other's personal information without their consent": "동의 없이 타인의 개인정보를 공개",
    "Reload the page and try again.": "페이지를 새로고침하고 다시 시도해 주세요.",
    "Remain active for 180 consecutive days": "연속 180일 활성 유지",
    "Remain active for 30 consecutive days": "연속 30일 활성 유지",
    "Remain active for 365 consecutive days": "연속 365일 활성 유지",
    "Remain active for 60 consecutive days": "연속 60일 활성 유지",
    "Remain active for 90 consecutive days": "연속 90일 활성 유지",
    "Remove this saved version from alliance management? Staff will retain its history.": "연합 관리에서 이 저장된 버전을 제거하시겠습니까? 스태프는 이전 기록을 유지합니다.",
    "Removed from alliance": "연합에서 제거됨",
    "Rename": "이름 변경",
    "Rename alliance": "연합 이름 변경",
    "Repeated violation will lead to longer suspensions or a permanent ban.": "반복 위반 시 더 긴 정지 또는 영구 정지로 이어질 수 있습니다.",
    "Report": "신고",
    "Report alliance": "연합 신고",
    "Report alliance name": "연합 이름 신고",
    "Report failed. Please try again later": "신고에 실패했습니다. 나중에 다시 시도해 주세요",
    "Report feedback": "신고 피드백",
    "Report name": "이름 신고",
    "Report reviewed": "신고 검토됨",
    "Report sent successfully": "신고가 성공적으로 전송되었습니다",
    "Report sent. Thank you for helping keep Wplace safe": "신고가 전송되었습니다. Wplace를 안전하게 유지해 주셔서 감사합니다",
    "Report User": "사용자 신고",
    "Republic of the Congo": "콩고 공화국",
    "Request accepted": "요청 수락됨",
    "Request cancelled": "요청 취소됨",
    "Request declined": "요청 거절됨",
    "Request expired": "요청 만료됨",
    "Request rejected": "요청 거부됨",
    "Request to join": "가입 요청",
    "Required": "필수",
    "Resend Code": "코드 재전송",
    "Reset": "초기화",
    "Resize overlay": "오버레이 크기 조절",
    "Resolution bonus": "해상도 보너스",
    "Restore original aspect ratio": "원본 종횡비 복원",
    "Restore original dimensions": "원본 크기 복원",
    "Restore Ratio": "비율 복원",
    "Reverse Pixels": "픽셀 되돌리기",
    "Reverting pixels...": "픽셀 되돌리는 중...",
    "Review join requests": "가입 요청 검토",
    "Review who wants in": "가입 요청자 검토",
    "Revoke": "취소",
    "Revoked": "취소됨",
    "Rewards": "보상",
    "Role": "역할",
    "Role changed": "역할 변경됨",
    "Role permissions": "역할 권한",
    "Roles and leadership": "역할 및 리더십",
    "Roles, removals and leadership": "역할, 제거 및 리더십",
    "Romania": "루마니아",
    "Rules": "규칙",
    "Russia": "러시아",
    "Rwanda": "르완다",
    "Réunion": "레위니옹",
    "SAC": "SAC",
    "Saint Barthélemy": "생바르텔레미",
    "Saint Helena": "세인트헬레나",
    "Saint Kitts and Nevis": "세인트키츠 네비스",
    "Saint Lucia": "세인트루시아",
    "Saint Martin (French part)": "생마르탱",
    "Saint Pierre and Miquelon": "생피에르 미클롱",
    "Saint Vincent and the Grenadines": "세인트빈센트 그레나딘",
    "Samoa": "사모아",
    "San Marino": "산마리노",
    "Sao Tome and Principe": "상투메 프린시페",
    "Saudi Arabia": "사우디아라비아",
    "Save": "저장",
    "Save selected pixel art": "선택한 픽셀 아트 저장",
    "Saved version equipped": "저장된 버전 착용됨",
    "Saved version removed": "저장된 버전 제거됨",
    "Saved versions": "저장된 버전",
    "Saved versions are immutable and can be switched at any time for free.": "저장된 버전은 변경할 수 없으며 언제든지 무료로 전환할 수 있습니다.",
    "Score for your side": "내 편의 점수",
    "Scribbling over other people's artwork": "타인의 작품에 낙서하기",
    "Search": "검색",
    "Search alliances": "연합 검색",
    "Search user": "사용자 검색",
    "Seasoned Alliance": "노련한 연합",
    "Security module not loaded yet. Please wait a moment or reload the page.": "보안 모듈이 아직 로드되지 않았습니다. 잠시 기다리거나 페이지를 새로고침해 주세요.",
    "See details": "상세 보기",
    "Select a color": "색상을 선택하세요",
    "Select a pixel to erase": "지울 픽셀을 선택하세요",
    "Select a player from a pixel": "픽셀에서 플레이어 선택",
    "Select an area first to generate a timelapse.": "타임랩스를 생성하려면 먼저 영역을 선택하세요.",
    "Select area": "영역 선택",
    "Select at least one player.": "최소 1명의 플레이어를 선택하세요.",
    "Select filtered": "필터된 항목 선택",
    "Select one or more canvases. Set each position from that canvas after saving.": "하나 이상의 캔버스를 선택하세요. 저장 후 각 캔버스에서 위치를 설정하세요.",
    "Select the area's first corner": "영역의 첫 번째 모서리를 선택하세요",
    "Select the area's opposite corner": "영역의 반대쪽 모서리를 선택하세요",
    "Select the headquarters location": "본부 위치를 선택하세요",
    "Select the reason": "사유를 선택하세요",
    "Select the report reason": "신고 사유를 선택하세요",
    "Select this location before setting its position.": "위치를 설정하기 전에 이 장소를 선택하세요.",
    "Select where to start": "시작할 위치를 선택하세요",
    "Selected": "선택됨",
    "Selected area": "선택한 영역",
    "Selected area has too much history to export a timelapse. Try a smaller area.": "선택한 영역의 이력이 너무 많아 타임랩스를 내보낼 수 없습니다. 더 작은 영역을 시도해 보세요.",
    "Selected area timelapse saved": "선택한 영역 타임랩스 저장됨",
    "Selected headquarters area saved": "선택한 본부 영역 저장됨",
    "Selected player IDs copied": "선택한 플레이어 ID 복사됨",
    "Send Code": "코드 전송",
    "Senegal": "세네갈",
    "Sensitive image": "민감한 이미지",
    "Serbia": "세르비아",
    "Service Workers are not supported/enabled in your browser. Some features might not work properly.": "이 브라우저에서 Service Worker가 지원되지 않거나 비활성화되어 있습니다. 일부 기능이 올바르게 작동하지 않을 수 있습니다.",
    "Sessions successfully revoked": "세션이 성공적으로 취소되었습니다",
    "Set a position for every selected canvas before saving.": "저장하기 전에 선택한 각 캔버스의 위치를 설정하세요.",
    "Set position": "위치 설정",
    "Set who can use it and how it appears on the canvas.": "누가 사용할 수 있는지와 캔버스에 어떻게 표시되는지 설정하세요.",
    "Setting changes": "설정 변경",
    "Settings": "설정",
    "Settings changed": "설정 변경됨",
    "Settings saved": "설정 저장됨",
    "Sexualization of minors or fictitious characters with child-like visual traits, regardless of their fictional age or lore": "가상 나이나 설정에 관계없이 어린이와 유사한 시각적 특징을 가진 미성년자 또는 허구 캐릭터의 성적 대상화",
    "Seychelles": "세이셸",
    "Share place": "장소 공유",
    "Shared balance": "공유 잔액",
    "Show all colors": "모든 색상 표시",
    "Show date": "날짜 표시",
    "Show Discord account": "Discord 계정 표시",
    "Show last painted pixel on alliance": "연합에서 마지막으로 칠한 픽셀 표시",
    "Show less": "간략히",
    "Show menu": "메뉴 표시",
    "Show more": "더 보기",
    "Show Pixel Art": "픽셀 아트 표시",
    "Show profile": "프로필 표시",
    "Showing": "표시 중",
    "Shown as a Join Discord Server button on your alliance page and public profile": "연합 페이지 및 공개 프로필에 Discord 서버 참가 버튼으로 표시",
    "Side full": "편이 가득 찼습니다",
    "Sierra Leone": "시에라리온",
    "Signed in now": "지금 로그인됨",
    "Singapore": "싱가포르",
    "Sint Maarten (Dutch part)": "신트마르턴",
    "Sizes unlock in order, and every step grows the canvas around your current art.": "크기는 순서대로 잠금 해제되며, 각 단계에서 현재 아트 주변의 캔버스가 확장됩니다.",
    "Slate": "슬레이트",
    "Slate Blue": "슬레이트 블루",
    "Slovakia": "슬로바키아",
    "Slovenia": "슬로베니아",
    "Small Beginnings": "작은 시작",
    "Snapshots": "스냅샷",
    "Solomon Islands": "솔로몬 제도",
    "Somalia": "소말리아",
    "Some features may not work correctly. We recommend using a regular browser.": "일부 기능이 올바르게 작동하지 않을 수 있습니다. 일반 브라우저 사용을 권장합니다.",
    "Some overlays are hidden from members": "일부 오버레이가 멤버에게 숨겨져 있습니다",
    "Something went wrong during sign-in. Please try again. If the error persists, please email contact@wplace.live.": "로그인 중 오류가 발생했습니다. 다시 시도해 주세요. 오류가 계속되면 contact@wplace.live로 이메일을 보내주세요.",
    "Sort": "정렬",
    "South Africa": "남아프리카 공화국",
    "South Georgia and the South Sandwich Islands": "사우스조지아 사우스샌드위치 제도",
    "South Korea": "대한민국",
    "South Sudan": "남수단",
    "SPACE": "스페이스",
    "Space is limited. Players and communities will compete for territory, and that's not just allowed, it's what keeps the map alive. Claiming, defending, and reclaiming space is core gameplay.": "공간은 제한되어 있습니다. 플레이어와 커뮤니티가 영역을 경쟁할 때 이것은 허용될 뿐만 아니라 지도를 살아 있게 하는 핵심 요소입니다. 공간을 점령, 방어 및 탈환하는 것이 코어 게임플레이입니다.",
    "Spain": "스페인",
    "Spend Alliance Coins": "연합 코인 사용",
    "Spend Coins on art, name and headquarters": "아트, 이름 및 본부에 코인 사용",
    "Square brush": "사각 브러시",
    "Sri Lanka": "스리랑카",
    "Staff": "스태프",
    "Staff adjustment": "스태프 조정",
    "Staff are always opted out automatically.": "스태프는 항상 자동으로 제외됩니다.",
    "Start from": "시작:",
    "Starts with basic alliance access.": "기본 연합 접근 권한으로 시작.",
    "Starts with every permission except editing role permissions.": "역할 권한 편집을 제외한 모든 권한으로 시작.",
    "Starts with moderation, invitations, and join requests.": "운영, 초대 및 가입 요청으로 시작.",
    "Still needed": "아직 필요",
    "Stone": "돌색",
    "Store": "상점",
    "Store Manager": "상점 관리자",
    "Store more shared picture, banner, and headquarters overlays.": "공유 그림, 배너 및 본부 오버레이를 더 많이 저장합니다.",
    "Styles": "스타일",
    "Submit": "제출",
    "Successfully linked your Discord account.": "Discord 계정이 성공적으로 연결되었습니다.",
    "Sudan": "수단",
    "Suggestions": "제안",
    "Suggestive Content": "암시적 콘텐츠",
    "Suggestive fetishist Content": "음란성 페티시스트 콘텐츠",
    "Suriname": "수리남",
    "Svalbard and Jan Mayen": "스발바르 얀마옌",
    "Sweden": "스웨덴",
    "Switzerland": "스위스",
    "Sync now": "지금 동기화",
    "Syncing...": "동기화 중...",
    "Syrian Arab Republic": "시리아",
    "Taiwan": "대만",
    "Tajikistan": "타지키스탄",
    "Tan": "황갈색",
    "Tanzania": "탄자니아",
    "Teal": "청록",
    "Team": "팀",
    "Tell us why you think your suspension should be reconsidered": "정지가 재검토되어야 한다고 생각하는 이유를 알려주세요",
    "Temporarily blocks this member from painting on the headquarters canvas.": "이 멤버의 본부 캔버스 칠하기를 일시적으로 차단합니다.",
    "Terms": "이용약관",
    "Terms of Service": "이용약관",
    "Territorial disputes": "영토 분쟁",
    "Territorial Disputes": "영토 분쟁",
    "Text Styles": "텍스트 스타일",
    "Thailand": "태국",
    "Thank you for helping keep the community fair and safe.": "커뮤니티를 공정하고 안전하게 유지해 주셔서 감사합니다.",
    "Thank you for your support!": "응원해 주셔서 감사합니다!",
    "That user already belongs to an alliance": "해당 사용자는 이미 연합에 소속되어 있습니다",
    "The alliance does not have enough Coins": "연합에 코인이 부족합니다",
    "The alliance headquarters is not unlocked yet": "연합 본부가 아직 잠금 해제되지 않았습니다",
    "The alliance is not archived": "연합이 보관되지 않았습니다",
    "The description contains unsupported Markdown or an unsafe link": "설명에 지원되지 않는 마크다운 또는 안전하지 않은 링크가 포함되어 있습니다",
    "The draft will be saved as an immutable version and closed for painting.": "초안이 불변 버전으로 저장되고 칠하기가 마감됩니다.",
    "The draft will be saved as an immutable version, closed for painting, and equipped right away.": "초안이 불변 버전으로 저장되고, 칠하기가 마감되며, 즉시 착용됩니다.",
    "The following content is subject to moderation intervention and can result in a <strong>permanent ban</strong>:": "다음 콘텐츠는 운영 개입 대상이며 <strong>영구 정지</strong>로 이어질 수 있습니다:",
    "<strong>permanent ban</strong>": "영구 정지",
    "is subject to moderation intervention and can result in a": "는 운영 개입 대상이며",
    "can result in a": "로 이어질 수 있습니다:",
    "The following rules are essential to keep the experience fair and safe for everyone:": "모두에게 공정하고 안전한 경험을 유지하기 위해 다음 규칙은 필수입니다:",
    "The headquarters canvas is locked by moderation": "본부 캔버스가 운영에 의해 잠겨 있습니다",
    "The Leader always has every permission. There is nothing to configure.": "리더는 항상 모든 권한을 보유합니다. 설정할 것이 없습니다.",
    "The name contains disallowed characters or words. Please choose a different name.": "이름에 허용되지 않는 문자 또는 단어가 포함되어 있습니다. 다른 이름을 선택해 주세요.",
    "The new leader must be a member of the alliance": "새 리더는 연합의 멤버여야 합니다",
    "The overlay position is outside this canvas.": "오버레이 위치가 이 캔버스 외부에 있습니다.",
    "The phone number is unsubscribed from SMS notifications. Check the link for more info: https://www.twilio.com/docs/api/errors/21610": "이 전화번호는 SMS 알림이 구독 취소되었습니다. 자세한 정보는 다음 링크를 확인하세요: https://www.twilio.com/docs/api/errors/21610",
    "The report contains incorrect, incomplete, inaccessible, or unusable information.\n\nThis can happen when the evidence does not match the report, the link is broken, or required details are missing.\n\nPlease review the information carefully before submitting a report. Make sure to report the correct player, make sure that it is an actual violation, and make sure to submit enough context details to help the moderation team investigate reports properly.": "신고에 부정확하거나, 불완전하거나, 접근 불가능하거나, 사용할 수 없는 정보가 포함되어 있습니다.\n\n이것은 증거가 신고와 일치하지 않거나, 링크가 손상되었거나, 필요한 세부사항이 누락된 경우에 발생할 수 있습니다.\n\n신고를 제출하기 전에 정보를 신중하게 검토해 주세요. 올바른 플레이어를 신고하고, 실제 위반인지 확인하며, 운영팀이 신고를 적절히 조사할 수 있도록 충분한 맥락 세부사항을 제출해 주세요.",
    "The report shows behavior that may be questionable, but it is not severe or clear enough to justify a moderation action.\n\nSome situations may be inappropriate, annoying, or borderline, but still not reach the threshold required for a punishment. In these cases, the moderation team may choose not to take formal action unless the behavior continues or becomes more serious.\n\nIf this happens again, please submit a new report with additional evidence showing a repeated pattern or a more serious violation.": "신고된 행동이 의문의 여지가 있을 수 있지만, 운영 조치를 정당화하기에 충분히 심각하거나 명확하지 않습니다.\n\n일부 상황은 부적절하거나, 짜증나거나, 경계선에 있을 수 있지만, 처벌에 필요한 기준에 미치지 못할 수 있습니다. 이러한 경우 운영팀은 행동이 계속되거나 더 심각해지지 않는 한 공식 조치를 취하지 않을 수 있습니다.\n\n이것이 다시 발생하면, 반복된 패턴이나 더 심각한 위반을 보여주는 추가 증거와 함께 새로운 신고를 제출해 주세요.",
    "The reported action was allowed under the event rules or special conditions active at the time.\n\nSome events, areas, game modes, or temporary rules may allow behavior that would normally be restricted elsewhere. Because the action was permitted in that specific context, no moderation action will be taken.\n\nPlease make sure to check the current event rules or special-area rules before submitting reports related to event gameplay.": "신고된 행위는 당시 유효한 이벤트 규칙 또는 특별 조건에 의해 허용되었습니다.\n\n일부 이벤트, 영역, 게임 모드 또는 임시 규칙은 일반적으로 다른 곳에서 제한되는 행동을 허용할 수 있습니다. 특정 맥락에서 해당 행위가 허용되었으므로 운영 조치는 취해지지 않습니다.\n\n이벤트 게임플레이와 관련된 신고를 제출하기 전에 현재 이벤트 규칙이나 특별 영역 규칙을 확인해 주세요.",
    "The reported behavior does not appear to violate the current rules.\n\nThe situation may have been frustrating, unwanted, or disruptive from your perspective, but based on the evidence provided, it does not meet the criteria for a rule violation.\n\nModeration actions are only taken when a report clearly shows behavior that breaks the rules. If you believe this decision is incorrect, please make sure future reports include enough context explaining why you believe that a rule was violated.": "신고된 행동은 현재 규칙을 위반하는 것으로 보이지 않습니다.\n\n상황이 귀하의 관점에서 좌절스럽거나, 원치 않거나, 방해가 되었을 수 있지만, 제공된 증거를 기반으로 할 때 규칙 위반 기준에 충족되지 않습니다.\n\n운영 조치는 신고가 규칙을 명백히 위반하는 행동을 보여줄 때만 취해집니다. 이 결정이 잘못되었다고 생각되면, 향후 신고에 규칙을 위반했다고 믿는 이유에 대한 충분한 맥락을 포함해 주세요.",
    "The reported issue appears to have been caused by a glitch, bug, lag, desync, or another technical problem.\n\nBecause the evidence suggests that the situation may not have been intentional player misconduct, we cannot treat it as a punishable rule violation.\n\nIf the issue continues, please report it as a bug or provide more evidence showing that a player intentionally abused the glitch.": "신고된 문제는 글리치, 버그, 렉, 동기화 불일치 또는 기타 기술적 문제로 인해 발생한 것으로 보입니다.\n\n증거가 상황이 의도적인 플레이어 비행이 아닐 수 있음을 시사하므로, 처벌 가능한 규칙 위반으로 처리할 수 없습니다.\n\n문제가 계속되면 버그로 보고하거나, 플레이어가 의도적으로 글리치를 악용했다는 증거를 추가로 제공해 주세요.",
    "The request timed out. Please try again.": "요청 시간이 초과되었습니다. 다시 시도해 주세요.",
    "The selected headquarters pixels have too much history to change at once. Select fewer pixels.": "선택한 본부 픽셀의 이력이 너무 많아 한 번에 변경할 수 없습니다. 픽셀을 적게 선택해 주세요.",
    "The service is currently unavailable. Please try again later.": "현재 서비스를 사용할 수 없습니다. 나중에 다시 시도해 주세요.",
    "The typed username does not match your current username.": "입력한 사용자 이름이 현재 사용자 이름과 일치하지 않습니다.",
    "The verification code is incorrect. Please check it and try again.": "인증 코드가 올바르지 않습니다. 확인 후 다시 시도해 주세요.",
    "The Void is spreading. Pick a side and paint.": "보이드가 확산되고 있습니다. 편을 선택하고 칠하세요.",
    "The whole alliance": "전체 연합",
    "These accounts can't be merged automatically. Contact us at contact@wplace.live and we'll sort it out.": "이러한 계정은 자동으로 병합할 수 없습니다. contact@wplace.live로 문의해 주세요.",
    "These upgrades apply to every member's independent charge pool for this alliance.": "이러한 업그레이드는 이 연합의 각 멤버 독립 충전 풀에 적용됩니다.",
    "This action cannot be undone.": "이 작업은 되돌릴 수 없습니다.",
    "This action is irreversible, do you want to proceed?": "이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?",
    "This action may take some time to be completed.": "이 작업은 완료되는 데 시간이 걸릴 수 있습니다.",
    "This action will log your account out from all devices.": "이 작업은 모든 기기에서 계정을 로그아웃시킵니다.",
    "This alliance already has the maximum number of active invites": "이 연합은 이미 최대 수의 활성 초대를 보유하고 있습니다",
    "This alliance changed its join policy": "이 연합이 가입 정책을 변경했습니다",
    "This alliance color requires Better Pallet": "이 연합 색상에는 Better Pallet이 필요합니다",
    "This alliance has no free overlay spaces.": "이 연합에 사용 가능한 오버레이 공간이 없습니다.",
    "This alliance has no headquarters": "이 연합에 본부가 없습니다",
    "This alliance has not earned an award yet": "이 연합이 아직 수상하지 못했습니다",
    "This alliance has reached its overlay storage limit. Delete an overlay or replace one with a smaller image.": "이 연합은 오버레이 저장 한도에 도달했습니다. 오버레이를 삭제하거나 더 작은 이미지로 교체하세요.",
    "This area is already under review": "이 영역은 이미 검토 중입니다",
    "This browser cannot export timelapse videos.": "이 브라우저는 타임랩스 비디오를 내보낼 수 없습니다.",
    "This capability is already unlocked": "이 기능은 이미 잠금 해제되어 있습니다",
    "This case has already been reviewed, resolved, or acted on by the moderation team.\n\nThe reported incident may have already resulted in a punishment, warning, previous decision, or internal review. Submitting the same case again without new evidence will not usually change the outcome.\n\nIf you have new and relevant evidence that was not included before, please submit a new report and clearly explain what new information is being provided.": "이 건은 이미 운영팀에 의해 검토, 해결 또는 조치되었습니다.\n\n신고된 사건은 이미 처벌, 경고, 이전 결정 또는 내부 검토로 이어졌을 수 있습니다. 새로운 증거 없이 동일한 건을 다시 제출해도 결과가 변하지 않는 경우가 많습니다.\n\n이전에 포함되지 않은 새로운 관련 증거가 있다면 새로운 신고를 제출하고 새로운 정보가 무엇인지 명확하게 설명해 주세요.",
    "This correction has already been reviewed.": "이 정정은 이미 검토되었습니다.",
    "This email address is not allowed. Please sign in with a different account.": "이 이메일 주소는 허용되지 않습니다. 다른 계정으로 로그인해 주세요.",
    "This email is already in use.": "이 이메일은 이미 사용 중입니다.",
    "This member already has access to the draft": "이 멤버는 이미 초안에 접근 권한이 있습니다",
    "This member already has an active headquarters timeout": "이 멤버는 이미 활성 본부 타임아웃이 있습니다",
    "this month": "이번 달",
    "This overlay": "이 오버레이",
    "This overlay is already at the safe render limit.\nAny increase will be blocked to avoid preview failures, build issues, or browser freezes.": "이 오버레이가 이미 안전한 렌더링 한도에 도달했습니다.\n미리보기 실패, 빌드 문제 또는 브라우저 멈춤을 방지하기 위해 증가는 차단됩니다.",
    "This overlay is close to the safe render limit.\nIncreasing it further can fail the preview, disable build mode, or freeze the browser.": "이 오버레이가 안전한 렌더링 한도에 근접해 있습니다.\n더 이상 늘리면 미리보기 실패, 빌드 모드 비활성화 또는 브라우저 멈춤이 발생할 수 있습니다.",
    "This phone number's region is not supported": "이 전화번호의 지역은 지원되지 않습니다",
    "This report is outside the scope of what the moderation team can act on through the report system.\n\nThis may include issues that happened outside the game, personal disputes, support requests, appeals, bug reports, or situations that are not covered by the current moderation rules.\n\nPlease use the correct support channel if your issue is related to technical problems, account issues, appeals, or other non-moderation matters.": "이 신고는 운영팀이 신고 시스템을 통해 조치할 수 있는 범위 밖입니다.\n\n여기에는 게임 외부에서 발생한 문제, 개인 분쟁, 지원 요청, 이의신청, 버그 보고 또는 현재 운영 규칙에 포함되지 않는 상황이 포함될 수 있습니다.\n\n기술적 문제, 계정 문제, 이의신청 또는 기타 운영 관련 문제가 있는 경우 올바른 지원 채널을 이용해 주세요.",
    "This request was already decided": "이 요청은 이미 결정되었습니다",
    "This timeout is no longer active": "이 타임아웃은 더 이상 활성화되지 않았습니다",
    "This was already resolved. Reload the page to see your account.": "이미 해결되었습니다. 계정을 보려면 페이지를 새로고침하세요.",
    "this week": "이번 주",
    "This will permanently delete your account and all associated data. This action cannot be undone.": "이 작업은 계정과 관련된 모든 데이터를 영구적으로 삭제합니다. 되돌릴 수 없습니다.",
    "Thousand Strong": "천 명의 힘",
    "Ticket corrections": "티켓 정정",
    "Tickets": "티켓",
    "Tiktok": "TikTok",
    "Time length (seconds)": "시간 길이 (초)",
    "Timelapse options": "타임랩스 옵션",
    "timeout": "타임아웃",
    "Timeout": "타임아웃",
    "Timeout appeal": "타임아웃 이의신청",
    "Timeout risk": "타임아웃 위험",
    "Timeout User": "사용자 타임아웃",
    "Timor-Leste": "동티모르",
    "to paint.": "칠하세요.",
    "today": "오늘",
    "Today": "오늘",
    "Toggle art opacity": "그림 투명도 토글",
    "Toggle save with map": "지도와 함께 저장 토글",
    "Togo": "토고",
    "Tokelau": "토켈라우",
    "Tonga": "통가",
    "Too many attempts. Please try again later": "시도 횟수가 너무 많습니다. 나중에 다시 시도해 주세요",
    "Too many overlay changes are happening. Wait a moment and try again.": "오버레이 변경이 너무 많이 발생하고 있습니다. 잠시 후 다시 시도해 주세요.",
    "Top painter of an event tile on the day it was unlocked.": "잠금 해제된 당일 이벤트 타일의 최고 칠하기 플레이어.",
    "Top painters": "최고 칠하기 플레이어",
    "Total": "합계",
    "Total spent": "총 사용량",
    "Transparent": "투명",
    "Trinidad and Tobago": "트리니다드 토바고",
    "Try again": "다시 시도",
    "Try another number": "다른 번호 시도",
    "Try these fixes:": "다음을 시도해 보세요:",
    "Tunisia": "튀니지",
    "Turkmenistan": "투르크메니스탄",
    "Turks and Caicos Islands": "터크스 케이커스 제도",
    "Turn on hardware acceleration in your browser settings (open": "브라우저 설정에서 하드웨어 가속을 켜세요 (열기:",
    "Turn on hardware acceleration in your browser settings, then restart the browser.": "브라우저 설정에서 하드웨어 가속을 켜고 브라우저를 재시작하세요.",
    "Tuvalu": "투발루",
    "Twitch": "Twitch",
    "Twitch account migrated successfully.": "Twitch 계정이 성공적으로 마이그레이션되었습니다.",
    "Type your username": "사용자 이름을 입력하세요",
    "Türkiye": "튀르키예",
    "Uganda": "우간다",
    "Ukraine": "우크라이나",
    "Unavailable": "사용 불가",
    "Unban": "차단 해제",
    "Uncommon": "희귀",
    "Understood": "알겠습니다",
    "Undo": "취소",
    "Unequip": "탈착",
    "Unequip this version before removing it": "제거하기 전에 이 버전을 탈착하세요",
    "Unexpected server error. Try again later.": "예상치 못한 서버 오류입니다. 나중에 다시 시도해 주세요.",
    "United Arab Emirates": "아랍에미리트",
    "United Force": "단결된 힘",
    "United Kingdom": "영국",
    "United States": "미국",
    "United States Minor Outlying Islands": "미국령 소외 제도",
    "Unlimited": "무제한",
    "Unlisted": "비공개",
    "Unlisted alliances stay reachable by direct link but leave the gallery": "비공개 연합은 직접 링크로 접근할 수 있지만 갤러리에서 제외됩니다",
    "Unlock": "잠금 해제",
    "Unlock at current anchor": "현재 앵커에서 잠금 해제",
    "Unlock badges by completing achievements": "업적을 완료하여 배지 잠금 해제",
    "Unlock in the store": "상점에서 잠금 해제",
    "Unlock screen": "화면 잠금 해제",
    "Unlock the Headquarters": "본부 잠금 해제",
    "Unlocked colors": "잠금 해제된 색상",
    "Unlocks every premium color for the alliance picture, banner, and headquarters canvases. Main-canvas color ownership is unchanged.": "연합 그림, 배너 및 본부 캔버스의 모든 프리미엄 색상을 잠금 해제합니다. 메인 캔버스 색상 소유권은 변경되지 않습니다.",
    "Unlocks resizable square and circle brushes, paint bucket fill, and filled polygon drawing for picture and banner canvases.": "리사이즈 가능한 사각 및 원형 브러시, 채우기, 그리고 그림 및 배너 캔버스용 채워진 다각형 그리기를 잠금 해제합니다.",
    "Unmute": "음소거 해제",
    "Unsaved changes": "저장되지 않은 변경 사항",
    "Unsupported file type. Use a PNG, WEBP, JPG image, or a .wplace overlay file.": "지원되지 않는 파일 형식입니다. PNG, WEBP, JPG 이미지 또는 .wplace 오버레이 파일을 사용하세요.",
    "Update": "업데이트",
    "Update position": "위치 업데이트",
    "Update your graphics card drivers to the latest version.": "그래픽 카드 드라이버를 최신 버전으로 업데이트하세요.",
    "Upgrade in store": "상점에서 업그레이드",
    "Uruguay": "우루과이",
    "Use arrow keys to move through snapshots.": "방향키로 스냅샷을 이동하세요.",
    "Use as template": "템플릿으로 사용",
    "Use fixed colors": "고정 색상 사용",
    "Use hardware acceleration when available": "사용 가능한 경우 하드웨어 가속 사용",
    "Use of software to completely automate painting": "소프트웨어를 사용하여 칠하기를 완전히 자동화",
    "Use paragraphs, line breaks, bold, italic, headings 1-3, lists, blockquotes, and http, https, or email links. HTML, images, and code are not supported.": "단락, 줄 바꿈, 굵게, 기울임꼴, 제목 1-3, 목록, 인용문, http, https 또는 이메일 링크를 사용할 수 있습니다. HTML, 이미지 및 코드는 지원되지 않습니다.",
    "Use restricted Markdown and write up to 2,048 characters. Includes one change credit.": "제한된 마크다운을 사용하여 최대 2,048자를 작성할 수 있습니다. 변경 크레딧 1개가 포함됩니다.",
    "Use the inspect tool on the canvas to timeout the painter of a pixel.": "캔버스의 검사 도구를 사용하여 픽셀의 칠하기 플레이어를 타임아웃하세요.",
    "Used up": "소진됨",
    "User": "사용자",
    "User ID": "사용자 ID",
    "User ID From": "시작 사용자 ID",
    "User ID To": "종료 사용자 ID",
    "Username copied to clipboard": "사용자 이름이 클립보드에 복사되었습니다",
    "Users": "사용자",
    "Users banned successfully": "사용자가 성공적으로 차단되었습니다",
    "Users timeouted successfully": "사용자가 성공적으로 타임아웃되었습니다",
    "Using multiple accounts to paint is against the rules and may result in suspension. Please use only your main account.": "여러 계정을 사용하여 칠하는 것은 규칙 위반이며 정지될 수 있습니다. 메인 계정만 사용해 주세요.",
    "Using transparent pixels over repetitive flags": "반복되는 깃발 위에 투명 픽셀 사용",
    "Using transparent pixels to remove inappropriate content": "투명 픽셀을 사용하여 부적절한 콘텐츠 제거",
    "Using transparent pixels to remove repetitive patterns": "투명 픽셀을 사용하여 반복 패턴 제거",
    "Using transparent pixels to remove spam, repetitive patterns, inappropriate or suggestive content is allowed.": "스팸, 반복 패턴, 부적절하거나 암시적인 콘텐츠를 제거하기 위해 투명 픽셀을 사용하는 것은 허용됩니다.",
    "Uzbekistan": "우즈베키스탄",
    "Vanuatu": "바누아투",
    "Vatican City": "바티칸 시국",
    "Venezuela": "베네수엘라",
    "Verification code expired. Please request a new one.": "인증 코드가 만료되었습니다. 새 코드를 요청해 주세요.",
    "Verify again": "다시 인증",
    "Verify if": "다음을 확인하세요:",
    "Verify your phone number to keep painting. This helps us block bots and multi-accounting to keep a fair experience for everyone.": "칠하기를 계속하려면 전화번호를 인증해 주세요. 봇과 다중 계정을 차단하여 모두에게 공정한 경험을 제공하는 데 도움이 됩니다.",
    "Veteran Alliance": "베테랑 연합",
    "Victory": "승리",
    "Viet Nam": "베트남",
    "View all": "전체 보기",
    "View on map": "지도에서 보기",
    "Violations of these rules may lead to suspension of your account or removal of drawings.": "이러한 규칙 위반 시 계정 정지 또는 그림 삭제로 이어질 수 있습니다.",
    "Virgin Islands": "버진 아일랜드",
    "Visibility, joining and invites": "공개 범위, 가입 및 초대",
    "Visit": "방문",
    "Visit tile": "타일 방문",
    "VPN or proxy detected. Please disable your VPN and try again.": "VPN 또는 프록시가 감지되었습니다. VPN을 비활성화한 후 다시 시도해 주세요.",
    "waiting for the tile to close": "타일이 닫힐 때까지 대기 중",
    "Wallis and Futuna": "왈리스 퓌튀나",
    "Wayback Tool": "과거 기록 도구",
    "We can't load the map": "지도를 불러올 수 없습니다",
    "We could not confirm what happened based on the information provided.\n\nThe report may show part of the situation, but it does not include enough context for the moderation team to understand the full incident, verify the sequence of events, or determine whether a rule was broken.\n\nWhen submitting a report, please include clear evidence, relevant timestamps, location or coordinates when applicable, and enough surrounding context to help us understand what happened before and after the reported action.": "제공된 정보를 기반으로 무슨 일이 일어났는지 확인할 수 없었습니다.\n\n신고는 상황의 일부를 보여줄 수 있지만, 운영팀이 전체 사건을 이해하고, 사건의 순서를 확인하고, 규칙이 위반되었는지 판단하기에 충분한 맥락이 포함되지 않았을 수 있습니다.\n\n신고를 제출할 때는 명확한 증거, 관련 타임스탬프, 해당 시 위치 또는 좌표, 그리고 신고된 행위 전후에 무슨 일이 일어났는지를 이해할 수 있는 충분한 주변 맥락을 포함해 주세요.",
    "We don't have frames to buy yet, wait for future updates ;)": "구매할 프레임이 아직 없습니다. 향후 업데이트를 기대해 주세요 ;)",
    "Week": "주",
    "Weighted RGB": "가중 RGB",
    "Western Sahara": "서사하라",
    "We’re currently experiencing high traffic. Some requests may not be processed at this time—please try again later. Thank you for your patience.": "현재 트래픽이 많습니다. 일부 요청이 지금 처리되지 않을 수 있습니다 — 나중에 다시 시도해 주세요. 기다려 주셔서 감사합니다.",
    "What are you reporting?": "무엇을 신고하시겠습니까?",
    "What changed lately": "최근 변경 사항",
    "When painting, click on the button": "칠할 때 버튼을 클릭하세요",
    "Where it appears": "표시 위치",
    "White": "흰색",
    "Who can see it": "누가 볼 수 있는지",
    "Why your suspension should be lifted?": "정지가 해제되어야 하는 이유는?",
    "Win exclusive frames, borders, badges and Droplets. Top painters can also earn special MVP rewards.": "독점 프레임, 테두리, 배지 및 물방울을 획득하세요. 최고 칠하기 플레이어는 특별 MVP 보상도 받을 수 있습니다.",
    "Winner frame": "승자 프레임",
    "Work on as many drafts as you like. Each new draft costs Coins.": "원하는 만큼 초안을 작업하세요. 새 초안은 코인이 소요됩니다.",
    "Wplace needs WebGL to render the canvas, and your browser couldn't start it. This is usually a graphics or browser setting — not a problem with your account.": "Wplace는 캔버스를 렌더링하기 위해 WebGL이 필요하며, 브라우저에서 이를 시작할 수 없었습니다. 이는 일반적으로 그래픽이나 브라우저 설정 문제입니다 — 계정 문제가 아닙니다.",
    "X": "X",
    "Yellow": "노랑",
    "Yemen": "예멘",
    "yesterday": "어제",
    "You": "나",
    "You already have this item. Please refresh the page.": "이미 이 항목을 보유하고 있습니다. 페이지를 새로고침해 주세요.",
    "You already picked a side": "이미 편을 선택했습니다",
    "You are already in an alliance": "이미 연합에 소속되어 있습니다",
    "You are banned from this alliance": "이 연합에서 차단되었습니다",
    "You are in a webview": "웹뷰에 있습니다",
    "You are not allowed to do this": "이 작업을 수행할 권한이 없습니다",
    "You are not allowed to verify a phone number. Try refreshing the page": "전화번호 인증이 허용되지 않습니다. 페이지를 새로고침해 보세요",
    "You are not logged in": "로그인되어 있지 않습니다",
    "You are painting too quickly. Wait a moment and try again.": "너무 빠르게 칠하고 있습니다. 잠시 기다린 후 다시 시도해 주세요.",
    "You are the leader": "당신은 리더입니다",
    "You are timed out from the headquarters canvas": "본부 캔버스에서 타임아웃되었습니다",
    "You are timed out from the headquarters canvas indefinitely": "본부 캔버스에서 무기한 타임아웃되었습니다",
    "You are trying to paint with a color you do not own": "소유하지 않은 색상으로 칠하려고 합니다",
    "You can only appeal once per punishment": "각 처벌에 대해 한 번만 이의신청할 수 있습니다",
    "You can paint more than 1 pixel": "여러 개의 픽셀을 칠할 수 있습니다",
    "You cannot paint over event pixels": "이벤트 픽셀 위에 칠할 수 없습니다",
    "You cannot review your own correction request.": "자신의 정정 요청을 검토할 수 없습니다.",
    "You do not have enough Droplets to buy this item.": "이 항목을 구매할 만한 물방울이 부족합니다.",
    "You do not have enough Droplets to pick this side": "이 편을 선택할 만한 물방울이 부족합니다",
    "You do not have permission to spend Alliance Coins.": "연합 코인을 사용할 권한이 없습니다.",
    "You don't have charges to paint. Wait to recharge.": "칠하기 충전이 없습니다. 충전될 때까지 기다려주세요.",
    "You gain 1 droplet per pixel painted and 500 Droplets per level": "칠한 픽셀당 물방울 1개를 획득하고, 레벨당 물방울 500개를 획득합니다",
    "You have already submitted an appeal for this suspension.": "이 정지에 대해 이미 이의신청을 제출했습니다.",
    "You have broken one of Wplace's rules": "Wplace의 규칙을 위반했습니다",
    "You have reached the report limit for the last hour": "지난 1시간 동안 신고 한도에 도달했습니다",
    "You have two accounts. Choose which one to keep": "계정이 두 개 있습니다. 유지할 계정을 선택하세요",
    "You haven't made any purchases yet": "아직 구매 내역이 없습니다",
    "You may submit <b>one appeal per punishment</b>. Our team will review your case, but this <b>does not guarantee</b> your suspension will be lifted. You'll be <b>notified of the result</b>.": "<b>각 처벌당 이의신청 1건</b>을 제출할 수 있습니다. 팀이 사안을 검토하지만, 정지가 해제된다는 것은 <b>보장되지 않습니다</b>. 결과는 <b>알림으로 통보</b>됩니다.",
    "<b>one appeal per punishment</b>": "각 처벌당 이의신청 1건",
    "You may submit": "제출할 수 있습니다.",
    "Our team will review your case, but this": "팀이 사안을 검토하지만,",
    "<b>does not guarantee</b> your suspension will be lifted": "정지가 해제된다는 것은 보장되지 않습니다",
    "You'll be <b>notified of the result</b>": "결과는 알림으로 통보됩니다.",
    "You need to be logged in to paint": "칠하기 위해 로그인이 필요합니다",
    "You need to zoom in to select a pixel": "픽셀을 선택하려면 확대해야 합니다",
    "You or someone in your network is making a lot of requests to the server. Try again later.": "귀하 또는 네트워크 내 누군가가 서버에 많은 요청을 보내고 있습니다. 나중에 다시 시도해 주세요.",
    "Your account has been suspended for breaking the rules": "규칙 위반으로 계정이 정지되었습니다",
    "Your account is too new to report": "계정이 너무 새로워 신고할 수 없습니다",
    "Your alliance": "내 연합",
    "Your alliance moved an overlay. Its position has been refreshed.": "연합이 오버레이를 이동했습니다. 위치가 새로고침되었습니다.",
    "Your appeal was reviewed by the moderation team and approved. The applied sanction was reversed.": "이의신청이 운영팀에 의해 검토되고 승인되었습니다. 적용된 제재가 취소되었습니다.",
    "Your appeal was reviewed by the moderation team and the decision was upheld.": "이의신청이 운영팀에 의해 검토되었고 결정이 유지되었습니다.",
    "Your badges": "내 배지",
    "Your balance": "내 잔액",
    "Your bank or Google Play turned down this charge, so no Droplets were added.": "은행 또는 Google Play가 이 충전을 거절하여 물방울이 추가되지 않았습니다.",
    "Your browser blocked the Google sign-in window. Allow pop-ups for this site (look for the pop-up blocked icon in the address bar) and try again.": "브라우저가 Google 로그인 창을 차단했습니다. 이 사이트의 팝업을 허용하세요(주소 줄에서 팝업 차단 아이콘을 확인)하고 다시 시도해 주세요.",
    "Your browser can't process Google Play purchases. Set Google Chrome as your device's default browser, then reopen WPlace to buy Droplets.": "브라우저에서 Google Play 구매를 처리할 수 없습니다. 기기의 기본 브라우저를 Google Chrome으로 설정한 후 WPlace를 다시 열어 물방울을 구매하세요.",
    "Your browser doesn't seem to be compatible to load the map. Please try another browser": "브라우저가 지도를 로드하기에 호환되지 않는 것 같습니다. 다른 브라우저를 시도해 주세요",
    "Your droplets": "내 물방울",
    "Your name is how other users will see you in Wplace. It can be changed every 60 days.": "이름은 다른 사용자에게 표시되는 정보입니다. 60일마다 변경할 수 있습니다.",
    "Your overlays stay on this device and in Google Drive, but they will no longer sync until you reconnect.": "오버레이는 이 기기와 Google Drive에 유지되지만, 다시 연결할 때까지 동기화되지 않습니다.",
    "Your payment was not completed. Return to the store to try again.": "결제가 완료되지 않았습니다. 상점으로 돌아가 다시 시도해 주세요.",
    "Your payment was received but is still being verified. This usually takes a few seconds, but can take a few minutes.": "결제가 접수되었지만 아직 확인 중입니다. 보통 몇 초 정도 소요되지만, 몇 분이 걸릴 수도 있습니다.",
    "Your phone number's country doesn't match your current location. Please use a local number.": "전화번호의 국가가 현재 위치와 일치하지 않습니다. 현지 번호를 사용해 주세요.",
    "Your purchases will appear organized by day.": "구매 내역은 날짜별로 정리되어 표시됩니다.",
    "Your report has been reviewed, and a penalty has been applied to the reported player.": "신고가 검토되었으며, 신고된 플레이어에게 제재가 적용되었습니다.",
    "Your report has been reviewed.": "신고가 검토되었습니다.",
    "Your sign-in attempt expired. Please try again.": "로그인 시도가 만료되었습니다. 다시 시도해 주세요.",
    "Your statistics": "내 통계",
    "Youtube": "YouTube",
    "Zambia": "잠비아",
    "Zero-tolerance content": "영점 허용 콘텐츠",
    "Zimbabwe": "짐바브웨",
    "Zoom in": "확대",
    "Zoom in to see the pixels": "픽셀을 보려면 확대하세요",
    "Zoom out": "축소",
    "Åland Islands": "올란드 제도",
    "浅红色": "연한 빨강",
  }
};

if (typeof window !== "undefined") window.WPLACE_TRANSLATIONS = WPLACE_TRANSLATIONS;

(() => {
  const KO_LABEL = "🇰🇷 한국어";
  const KO_KEY = "ko";

  // 후킹
  const origGetItem = Storage.prototype.getItem;
  const origSetItem = Storage.prototype.setItem;

  function isKorActive() {
    try {
      const userLang = origGetItem.call(window.localStorage, "WPLACE_USER_LANG");
      if (userLang) return userLang === "ko";
      const paraglideLocale = origGetItem.call(window.localStorage, "PARAGLIDE_LOCALE");
      return paraglideLocale === "ko";
    } catch {
      return false;
    }
  }

  // 파라글라이드에는 영어로 넘겨서 베트남어 방지
  try {
    Storage.prototype.getItem = function(key) {
      const val = origGetItem.call(this, key);
      if (key === "PARAGLIDE_LOCALE") {
        if (isKorActive()) return "en";
      }
      return val;
    };
  } catch {}

  // 번역 메인

  function getDict() {
    return (window.WPLACE_TRANSLATIONS && window.WPLACE_TRANSLATIONS.ko) || {};
  }

  function translateText(text) {
    if (!text || typeof text !== "string" || !text.trim()) return text;
    if (!isKorActive()) return text;

    const dict = getDict();
    const trimmed = text.trim();

    // 일치
    if (dict[trimmed] !== undefined) {
      return text.replace(trimmed, dict[trimmed]);
    }
    if (dict[text] !== undefined) {
      return dict[text];
    }

    // 대소문자 무시 일치
    const lower = trimmed.toLowerCase();
    for (const k in dict) {
      if (k.toLowerCase() === lower) {
        return text.replace(trimmed, dict[k]);
      }
    }

    // 패턴에 따른 교체
    for (const k in dict) {
      if (k.includes("{e}")) continue;
      if (!k.includes("{n}") && !k.includes("{s}")) continue;
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = "^" + esc
        .replace(/\\\{n\\\}/g, "([\\d,\\.]+)")
        .replace(/\\\{s\\\}/g, "(.+?)") + "$";
      try {
        const match = trimmed.match(new RegExp(pattern, "i"));
        if (match) {
          let idx = 1;
          const rep = dict[k].replace(/\{n\}|\{s\}/g, () => match[idx++] ?? "");
          return text.replace(trimmed, rep);
        }
      } catch {}
    }

    return text;
  }

  // DOM 후킹
  try {
    const origCreateTextNode = Document.prototype.createTextNode;
    Document.prototype.createTextNode = function(data) {
      return origCreateTextNode.call(this, translateText(data));
    };

    const origDataDesc = Object.getOwnPropertyDescriptor(CharacterData.prototype, "data");
    if (origDataDesc && origDataDesc.set && origDataDesc.get) {
      const origDataGet = origDataDesc.get;
      const origDataSet = origDataDesc.set;
      Object.defineProperty(CharacterData.prototype, "data", {
        get() {
          return origDataGet.call(this);
        },
        set(val) {
          origDataSet.call(this, translateText(val));
        },
        configurable: true
      });
    }

    const origNodeValueDesc = Object.getOwnPropertyDescriptor(Node.prototype, "nodeValue");
    if (origNodeValueDesc && origNodeValueDesc.set && origNodeValueDesc.get) {
      const origNodeValueGet = origNodeValueDesc.get;
      const origNodeValueSet = origNodeValueDesc.set;
      Object.defineProperty(Node.prototype, "nodeValue", {
        get() {
          return origNodeValueGet.call(this);
        },
        set(val) {
          origNodeValueSet.call(this, translateText(val));
        },
        configurable: true
      });
    }

    const origSetAttribute = Element.prototype.setAttribute;
    const TRANSLATABLE_ATTRS = new Set(["title", "placeholder", "aria-label", "alt", "data-tip", "data-tooltip"]);
    Element.prototype.setAttribute = function(name, value) {
      if (TRANSLATABLE_ATTRS.has(name?.toLowerCase())) {
        value = translateText(value);
      }
      return origSetAttribute.call(this, name, value);
    };
  } catch (err) {
    console.error("[wplace-kr] DOM hook error:", err);
  }

  // 대충 여러 지원 함수
  function matchHTMLKey(html) {
    if (!html || typeof html !== "string" || !isKorActive()) return null;
    const dict = getDict();
    if (dict[html] !== undefined) return dict[html];
    const t = html.trim();
    if (dict[t] !== undefined) return dict[t];
    const lower = t.toLowerCase();
    for (const k in dict) {
      if (dict[k] === undefined) continue;
      if (k.includes("{") && k.includes("}")) continue;
      if (k.toLowerCase() === lower) return dict[k];
    }
    return null;
  }

  try {
    const origInnerHTML = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML");
    if (origInnerHTML && origInnerHTML.set) {
      Object.defineProperty(Element.prototype, "innerHTML", {
        configurable: true,
        enumerable: origInnerHTML.enumerable,
        get() { return origInnerHTML.get.call(this); },
        set(value) {
          if (typeof value === "string") {
            const rep = matchHTMLKey(value);
            if (rep != null) value = rep;
          }
          return origInnerHTML.set.call(this, value);
        }
      });
    }

    const origIAH = Element.prototype.insertAdjacentHTML;
    Element.prototype.insertAdjacentHTML = function(position, text) {
      if (typeof text === "string") {
        const rep = matchHTMLKey(text);
        if (rep != null) text = rep;
      }
      return origIAH.call(this, position, text);
    };
  } catch (err) {
    console.error("[wplace-kr] HTML 후킹 오류:", err);
  }

  function getLangKeyFromButton(button) {
    const text = button.textContent || "";
    if (text.includes("English")) return "en";
    if (text.includes("Português")) return "pt";
    if (text.includes("한국어")) return "ko";
    if (text.includes("中文")) return "ch";
    if (text.includes("Deutsch")) return "de";
    if (text.includes("Español")) return "es";
    if (text.includes("Français")) return "fr";
    if (text.includes("Italiano")) return "it";
    if (text.includes("日本語")) return "jp";
    if (text.includes("Polski")) return "pl";
    if (text.includes("Русский")) return "ru";
    if (text.includes("Українська")) return "uk";
    if (text.includes("Tiếng Việt")) return "vi";
    return button.getAttribute("data-lang") || button.getAttribute("data-value") || "en";
  }

  // 메뉴 언어 추가
  function addKoreanToMenu() {
    try {
      const uls = [...document.querySelectorAll("ul")].filter(ul => {
        const t = ul.textContent || "";
        return t.includes("English") && t.includes("Português");
      });

      for (const ul of uls) {
        let btn = ul.querySelector(`[data-lang="${KO_KEY}"]`);
        const active = isKorActive();

        if (!btn) {
          const firstLi = ul.querySelector("li");
          const li = firstLi ? firstLi.cloneNode(true) : document.createElement("li");

          btn = li.querySelector("button") || li;
          btn.setAttribute("data-lang", KO_KEY);
          btn.setAttribute("data-value", KO_KEY);
          btn.className = "font-flag relative font-medium" + (active ? " bg-base-300" : "");
          btn.innerHTML = `<!----> ${KO_LABEL}`;

          btn.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            try {
              origSetItem.call(window.localStorage, "WPLACE_USER_LANG", "ko");
              origSetItem.call(window.localStorage, "PARAGLIDE_LOCALE", "ko");
            } catch {}
            location.reload();
          });

          if (active) {
            ul.querySelectorAll("button").forEach(b => {
              if (b !== btn) b.classList.remove("bg-base-300", "bg-base-200");
            });
          }

          ul.appendChild(li);
        } else {
          if (active) {
            btn.classList.add("bg-base-300");
            ul.querySelectorAll("button").forEach(b => {
              if (b !== btn) b.classList.remove("bg-base-300", "bg-base-200");
            });
          } else {
            btn.classList.remove("bg-base-300", "bg-base-200");
          }
        }

        // 언어 변경 감지
        ul.querySelectorAll("button").forEach(otherBtn => {
          if (otherBtn !== btn && !otherBtn._wplaceHooked) {
            otherBtn._wplaceHooked = true;
            otherBtn.addEventListener("click", () => {
              const langKey = getLangKeyFromButton(otherBtn);
              try {
                origSetItem.call(window.localStorage, "WPLACE_USER_LANG", langKey);
                origSetItem.call(window.localStorage, "PARAGLIDE_LOCALE", langKey);
              } catch {}
              btn.classList.remove("bg-base-300", "bg-base-200");
              otherBtn.classList.add("bg-base-300");
            });
          }
        });

        break;
      }
    } catch {}
  }

  // {e} 패턴 처리
  function translateNodeWithElement(node) {
    if (!node || node.nodeType !== 3 || !isKorActive()) return;
    const rawText = node.nodeValue;
    if (!rawText || !rawText.trim()) return;
    const trimmed = rawText.trim();

    const dict = getDict();

    // 다음 요소 찾기 (텍스트 말고)
    let nextEl = null;
    let curr = node.nextSibling;
    while (curr) {
      if (curr.nodeType === 1) { nextEl = curr; break; }
      if (curr.nodeType === 3 && curr.nodeValue.trim()) break;
      curr = curr.nextSibling;
    }

    const elText = nextEl ? (nextEl.textContent?.trim() || "") : "";

    for (const k in dict) {
      if (!k.includes("{e}")) continue;
      const esc = k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      // 대충 복잡한 정규식
      if (!elText) continue;
      const elEsc = elText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const pattern = "^" + esc.replace(/\\\{e\\\}/g, elEsc) + "$";
      try {
        const combined = trimmed + (trimmed.endsWith(" ") ? "" : " ") + elText;
        if (!combined.match(new RegExp(pattern.replace(elEsc, "(.+?)"), "i"))) continue;
        const match = combined.match(new RegExp(pattern.replace(elEsc, "(.+?)"), "i"));
        if (!match) continue;

        // {e}를 기준으로 나누기
        const parts = dict[k].split("{e}");
        const prefix = parts[0] || "";
        const suffix = parts[1] || "";

        // 텍스트 노드 교체
        node.nodeValue = rawText.replace(trimmed, prefix.trimEnd());

        // 다음 요소 뒤에 suffix 추가
        if (suffix.trim()) {
          let after = nextEl.nextSibling;
          if (after && after.nodeType === 3) {
            after.nodeValue = " " + suffix.trimStart() + after.nodeValue;
          } else {
            nextEl.after(document.createTextNode(" " + suffix.trimStart()));
          }
        }
        return;
      } catch {}
    }
  }

  // DOM 트리 순회 및 번역
  function walkAndTranslate(root) {
    if (!root || !isKorActive()) return;
    if (root.nodeType === 3) {
      const val = root.nodeValue;
      if (val && typeof val === "string") {
        // {e} 패턴 처리
        translateNodeWithElement(root);
        const cur = root.nodeValue;
        const trans = translateText(cur);
        if (trans !== cur) root.nodeValue = trans;
      }
      return;
    }
    if (root.nodeType === 1) {
      const tag = root.tagName;
      if (tag === "SCRIPT" || tag === "STYLE" || tag === "CANVAS") return;

      // innerHTML 번역
      try {
        const html = root.innerHTML;
        if (html && html.includes("<")) {
          const rep = matchHTMLKey(html);
          if (rep != null) {
            root.innerHTML = rep;
            return;
          }
        }
      } catch {}

      for (const attr of ["title", "placeholder", "aria-label", "alt", "data-tip"]) {
        const val = root.getAttribute(attr);
        if (val) {
          const trans = translateText(val);
          if (trans !== val) root.setAttribute(attr, trans);
        }
      }

      for (let i = 0; i < root.childNodes.length; i++) {
        walkAndTranslate(root.childNodes[i]);
      }
    }
  }


  function init() {
    addKoreanToMenu();
    if (document.body) walkAndTranslate(document.body);

    const observer = new MutationObserver(mutations => {
      addKoreanToMenu();
      for (const m of mutations) {
        if (m.type === "childList") {
          for (let i = 0; i < m.addedNodes.length; i++) {
            walkAndTranslate(m.addedNodes[i]);
          }
        } else if (m.type === "characterData") {
          // 텍스트 노드 변경 감지
          walkAndTranslate(m.target);
        }
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();





