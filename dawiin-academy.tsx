import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DawiinAcademy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-3xl text-blue-400">🏢</span>
            <div>
              <h1 className="text-2xl font-bold">DAWIIN Academy</h1>
              <p className="text-sm text-slate-400">부동산 전문가 교육의 새로운 기준</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold">앤디 전문가</p>
            <p className="text-sm text-blue-400">1600-5997</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">부동산 전문가 양성 프로그램</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI 기술과 실전 경험을 결합한 차별화된 교육으로 부동산 전문가의 길을 열어드립니다
          </p>
        </div>

        <Tabs defaultValue="digital" className="mb-16">
          <TabsList className="grid grid-cols-6 max-w-4xl mx-auto">
            <TabsTrigger value="digital" className="flex items-center gap-2">
              💻 디지털마케팅
            </TabsTrigger>
            <TabsTrigger value="auction" className="flex items-center gap-2">
              🔨 경매전문가
            </TabsTrigger>
            <TabsTrigger value="agent" className="flex items-center gap-2">
              🏢 중개실무
            </TabsTrigger>
            <TabsTrigger value="development" className="flex items-center gap-2">
              🌆 토지개발
            </TabsTrigger>
            <TabsTrigger value="ai" className="flex items-center gap-2">
              🤖 AI특화
            </TabsTrigger>
            <TabsTrigger value="investment" className="flex items-center gap-2">
              📈 디벨롭먼트
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="digital">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• STEP 1. 부동산 빅데이터 분석</li>
                      <li>• 빅데이터 플랫폼 사용법</li>
                      <li>• 시장 전망 분석</li>
                      <li>• STEP 2. 블로그 마케팅</li>
                      <li>• 블로그 마케팅 트렌드</li>
                      <li>• STEP 3. 유튜브 마케팅</li>
                      <li>• 유튜브 영상 제작</li>
                      <li>• 광고 마케팅 방법</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 블로그 자동 생성 시스템 구축</li>
                      <li>• 인스타그램 자동 포스팅 시스템</li>
                      <li>• AI 기반 고품질 쇼츠 제작</li>
                      <li>• AI 아바타 활용 맞춤형 영상</li>
                      <li>• 매물 자동 영상 생성 시스템</li>
                      <li>• 저비용 네이버 검색 상위노출 전략</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="auction">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 경매의 꽃, 특수경매 낙찰</li>
                      <li>• 돈되는 물건 알기</li>
                      <li>• 경쟁 낮은 토지, 상가, 공장</li>
                      <li>• 수익을 높이는 실전 경험</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 기본이 되는 특별한 커리큘럼</li>
                      <li>• 오르는 아파트 반값에 매입하기</li>
                      <li>• 낙찰가 정확한 예측 시스템</li>
                      <li>• 빅데이터 기반 매매가 분석</li>
                      <li>• 신탁공매 40% 낙찰 전략</li>
                      <li>• NPL 35% 매입 기법</li>
                      <li>• 토지 500% 수익 실현 노하우</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agent">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 부동산 시장 기본 이해</li>
                      <li>• 기초 영업 노하우</li>
                      <li>• 일반적인 물건 확보 방법</li>
                      <li>• 기본 광고 작성법</li>
                      <li>• 표준 중개보수 안내</li>
                      <li>• 간단한 세무 지식</li>
                      <li>• 기본 계약서 작성</li>
                      <li>• SNS 기초 활용법</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 물건 대량 무료 확보 시스템</li>
                      <li>• 집주인 네이버 자동 확보 시스템</li>
                      <li>• 시행 토지 확보 프로세스</li>
                      <li>• 매물 자동 등록 시스템</li>
                      <li>• 빌딩매매 월 1건 달성 비법 전수</li>
                      <li>• 토지 디지털 매매 전문가 과정</li>
                      <li>• 상가중개 전문화 프로그램</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="development">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 토지와 도로 개념</li>
                      <li>• 도로지정공고 이해</li>
                      <li>• 건축 후퇴선 규정</li>
                      <li>• 전기인입 및 배수로</li>
                      <li>• 접도구역과 완충농지</li>
                      <li>• 교차로 영향권</li>
                      <li>• 개발부담금제도</li>
                      <li>• 분묘기지권 이해</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 상승 잠재력 토지 발굴법</li>
                      <li>• 단기 수익형 토지 선별법</li>
                      <li>• 도시개발사업 부지 투자전략</li>
                      <li>• 지구단위계획 활용 기법</li>
                      <li>• 농지법 규제 대응 전략</li>
                      <li>• 절세를 통한 수익 극대화</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ai">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• AI의 중요성</li>
                      <li>• AI 활용 방안</li>
                      <li>• AI 브랜드 강화</li>
                      <li>• 프롬프트 작성 기초</li>
                      <li>• 기본 GPT 활용법</li>
                      <li>• 일반적 AI 마케팅</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 부동산 전용 GPT 제작</li>
                      <li>• 블로그 자동 생성 시스템</li>
                      <li>• 매물 자동 등록 AI 구축</li>
                      <li>• AI 기반 매물 가치 분석</li>
                      <li>• AI 아바타 영상 제작</li>
                      <li>• 저비용 AI 마케팅 자동화</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investment">
              <Card>
                <CardContent className="grid grid-cols-2 gap-8 p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">일반적 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 부동산 개발사업 개요</li>
                      <li>• 권리, 입지 분석</li>
                      <li>• 상권, 시장 분석</li>
                      <li>• 사업계획 수립</li>
                      <li>• 사업성 검토</li>
                      <li>• 기본 출구전략</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">앤디 교육</h3>
                    <ul className="space-y-2 text-slate-600">
                      <li>• 상가/빌딩 분양대행 계약 실무</li>
                      <li>• 건축주/시행사 할인 협상 전략</li>
                      <li>• 시행 토지 확보 프로세스</li>
                      <li>• 수수료 극대화 전략</li>
                      <li>• 상가 MD 구성 및 NPL 활용</li>
                      <li>• VIP 고객 유치 시스템</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>

        <div className="bg-slate-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">전문가 상담 신청</h3>
          <p className="mb-6">프리미엄 교육에 대한 자세한 안내를 받아보세요</p>
          <div className="text-xl font-bold text-blue-400">1600-5997</div>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-2">DAWIIN 아카데미 | 대표: 앤디</p>
          <p className="text-slate-400">최고의 부동산 전문가 양성 프로그램</p>
        </div>
      </footer>
    </div>
  );
}
